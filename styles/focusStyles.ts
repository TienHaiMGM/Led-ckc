// Focus styles for different types of elements

// Base focus style that can be used for most interactive elements
export const baseFocusStyle = `
  focus:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-blue-400 
  focus-visible:ring-offset-2 
  focus-visible:ring-offset-white
  focus-visible:rounded-lg 
  transition-shadow duration-200
`;

// Focus style for elements on dark backgrounds
export const darkBgFocusStyle = `
  focus:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-blue-400 
  focus-visible:ring-offset-2 
  focus-visible:ring-offset-blue-600
  focus-visible:rounded-lg 
  transition-shadow duration-200
`;

// Focus style with scale effect for interactive elements like buttons
export const scaleFocusStyle = `
  focus:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-blue-400 
  focus-visible:ring-offset-2 
  focus-visible:ring-offset-white
  focus-visible:rounded-lg 
  focus-visible:scale-105
  transition-all duration-200
`;

// Focus style for form inputs
export const inputFocusStyle = `
  focus:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-blue-400 
  focus-visible:ring-offset-1
  focus-visible:ring-offset-white
  focus-visible:border-transparent
  transition-shadow duration-200
`;

// Focus style for navigation links
export const navLinkFocusStyle = `
  focus:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-blue-400 
  focus-visible:ring-offset-2 
  focus-visible:ring-offset-white
  focus-visible:rounded-md
  focus-visible:bg-blue-50
  transition-all duration-200
`;

// Focus style for cards and larger interactive elements
export const cardFocusStyle = `
  focus:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-blue-400 
  focus-visible:ring-offset-4 
  focus-visible:ring-offset-white
  focus-visible:rounded-xl
  focus-visible:shadow-lg
  transition-all duration-300
`;

// Focus style for small interactive elements like icons
export const iconFocusStyle = `
  focus:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-blue-400 
  focus-visible:ring-offset-2 
  focus-visible:ring-offset-white
  focus-visible:rounded-full
  transition-shadow duration-200
`;

// Focus style for danger/critical actions
export const dangerFocusStyle = `
  focus:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-red-400 
  focus-visible:ring-offset-2 
  focus-visible:ring-offset-white
  focus-visible:rounded-lg
  transition-shadow duration-200
`;

// Helper function to combine focus styles with additional classes
export const combineFocusStyles = (...styles: string[]) => {
  return styles.join(' ');
};
