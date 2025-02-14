import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  updateEmail,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth';
import { AUTH_ERRORS } from '@/types/auth';

class AuthService {
  private auth = getAuth();
  private readonly USER_STORAGE_KEY = 'auth_user';

  // Get current user
  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  // Get cached user data
  getCachedUser(): User | null {
    const userData = localStorage.getItem(this.USER_STORAGE_KEY);
    return userData ? JSON.parse(userData) : null;
  }

  // Save user data to storage
  private saveUserToStorage(user: User | null): void {
    if (user) {
      localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.USER_STORAGE_KEY);
    }
  }

  // Login with email and password
  async login(email: string, password: string, remember: boolean = false): Promise<UserCredential> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      
      if (remember) {
        this.saveUserToStorage(userCredential.user);
      }

      return userCredential;
    } catch (error: any) {
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          throw new Error(AUTH_ERRORS.INVALID_CREDENTIALS);
        case 'auth/too-many-requests':
          throw new Error(AUTH_ERRORS.TOO_MANY_ATTEMPTS);
        default:
          throw new Error(AUTH_ERRORS.LOGIN_ERROR);
      }
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      this.saveUserToStorage(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw new Error(AUTH_ERRORS.LOGOUT_ERROR);
    }
  }

  // Reset password
  async resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(this.auth, email);
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        throw new Error(AUTH_ERRORS.USER_NOT_FOUND);
      }
      throw new Error(AUTH_ERRORS.PASSWORD_RESET_ERROR);
    }
  }

  // Update password
  async updateUserPassword(newPassword: string): Promise<void> {
    const user = this.getCurrentUser();
    if (!user) throw new Error(AUTH_ERRORS.NOT_AUTHENTICATED);

    try {
      await updatePassword(user, newPassword);
    } catch (error) {
      console.error('Update password error:', error);
      throw new Error(AUTH_ERRORS.PASSWORD_UPDATE_ERROR);
    }
  }

  // Update email
  async updateUserEmail(newEmail: string): Promise<void> {
    const user = this.getCurrentUser();
    if (!user) throw new Error(AUTH_ERRORS.NOT_AUTHENTICATED);

    try {
      await updateEmail(user, newEmail);
    } catch (error) {
      console.error('Update email error:', error);
      throw new Error(AUTH_ERRORS.EMAIL_UPDATE_ERROR);
    }
  }

  // Update profile
  async updateUserProfile(profile: { displayName?: string; photoURL?: string }): Promise<void> {
    const user = this.getCurrentUser();
    if (!user) throw new Error(AUTH_ERRORS.NOT_AUTHENTICATED);

    try {
      await updateProfile(user, profile);
      const updatedUser = this.getCurrentUser();
      if (updatedUser) {
        this.saveUserToStorage(updatedUser);
      }
    } catch (error) {
      console.error('Update profile error:', error);
      throw new Error(AUTH_ERRORS.PROFILE_UPDATE_ERROR);
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

  // Check if user has specific role
  async hasRole(role: string): Promise<boolean> {
    const user = this.getCurrentUser();
    if (!user) return false;

    try {
      const token = await user.getIdTokenResult();
      return !!token.claims[role];
    } catch (error) {
      console.error('Check role error:', error);
      return false;
    }
  }

  // Get user token
  async getToken(): Promise<string | null> {
    const user = this.getCurrentUser();
    if (!user) return null;

    try {
      return await user.getIdToken();
    } catch (error) {
      console.error('Get token error:', error);
      return null;
    }
  }

  // Refresh user token
  async refreshToken(): Promise<string | null> {
    const user = this.getCurrentUser();
    if (!user) return null;

    try {
      await user.getIdToken(true);
      return await user.getIdToken();
    } catch (error) {
      console.error('Refresh token error:', error);
      return null;
    }
  }

  // Subscribe to auth state changes
  onAuthStateChanged(callback: (user: User | null) => void): () => void {
    return this.auth.onAuthStateChanged((user) => {
      this.saveUserToStorage(user);
      callback(user);
    });
  }
}

// Create singleton instance
const authService = new AuthService();
export default authService;
