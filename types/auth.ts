import { User } from 'firebase/auth';

export interface AuthError {
  code: string;
  message: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

export interface UserProfile {
  displayName?: string;
  photoURL?: string;
  email?: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAdmin: boolean;
}

export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (profile: UserProfile) => Promise<void>;
  updateEmail: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: 'Email hoặc mật khẩu không đúng',
  TOO_MANY_ATTEMPTS: 'Quá nhiều lần thử. Vui lòng thử lại sau',
  LOGIN_ERROR: 'Đăng nhập thất bại',
  LOGOUT_ERROR: 'Đăng xuất thất bại',
  USER_NOT_FOUND: 'Không tìm thấy tài khoản',
  PASSWORD_RESET_ERROR: 'Không thể đặt lại mật khẩu',
  NOT_AUTHENTICATED: 'Vui lòng đăng nhập',
  PASSWORD_UPDATE_ERROR: 'Không thể cập nhật mật khẩu',
  EMAIL_UPDATE_ERROR: 'Không thể cập nhật email',
  PROFILE_UPDATE_ERROR: 'Không thể cập nhật thông tin',
  WEAK_PASSWORD: 'Mật khẩu phải có ít nhất 6 ký tự',
  INVALID_EMAIL: 'Email không hợp lệ',
  EMAIL_ALREADY_IN_USE: 'Email đã được sử dụng',
  REQUIRES_RECENT_LOGIN: 'Vui lòng đăng nhập lại để thực hiện thao tác này',
} as const;

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: number;
}

export interface AuthStorageData {
  session?: AuthSession;
  rememberMe: boolean;
}

export interface AuthConfig {
  tokenRefreshThreshold: number; // in milliseconds
  sessionTimeout: number; // in milliseconds
  maxLoginAttempts: number;
  lockoutDuration: number; // in milliseconds
  passwordRequirements: {
    minLength: number;
    requireUppercase: boolean;
    requireLowercase: boolean;
    requireNumbers: boolean;
    requireSpecialChars: boolean;
  };
}

export interface AuthMetadata {
  lastLogin: string;
  lastPasswordChange: string;
  loginAttempts: number;
  lockedUntil?: string;
  roles: string[];
  permissions: string[];
}

export interface AuthAuditLog {
  id: string;
  userId: string;
  action: 'login' | 'logout' | 'resetPassword' | 'updateProfile' | 'updateEmail' | 'updatePassword';
  timestamp: string;
  metadata: {
    ip?: string;
    userAgent?: string;
    location?: string;
    success: boolean;
    error?: string;
  };
}

export interface AuthValidationError {
  field: 'email' | 'password' | 'displayName' | 'photoURL';
  message: string;
  code: string;
}

export type AuthActionType =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_ERROR'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'UPDATE_USER'; payload: Partial<User> }
  | { type: 'SET_ADMIN'; payload: boolean };

export interface AuthReducerState extends AuthState {
  initialized: boolean;
}

export type AuthDispatch = (action: AuthActionType) => void;
