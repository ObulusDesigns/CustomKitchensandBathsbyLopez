// Design System for Custom Kitchens & Baths by Lopez
// Based on brand colors extracted from logo

export const colors = {
  // Primary brand colors from logo
  primary: {
    burgundy: '#5C1F33', // Deep burgundy from logo center
    gold: '#C5A572', // Gold from decorative elements
    goldLight: '#D4B896', // Lighter gold variant
    goldDark: '#A68B5B', // Darker gold variant
  },
  
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    offWhite: '#FAFAFA',
    lightGray: '#F5F5F5',
    gray: '#E0E0E0',
    darkGray: '#6B6B6B',
    charcoal: '#333333',
    black: '#000000',
  },
  
  // Semantic colors
  semantic: {
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  
  // Background colors
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    accent: '#FFF9F5', // Warm off-white
    dark: '#1A1A1A',
  }
};

export const typography = {
  // Font families
  fonts: {
    heading: 'Playfair Display, Georgia, serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    accent: 'Montserrat, sans-serif',
  },
  
  // Font sizes - mobile first, then desktop
  sizes: {
    xs: { mobile: '0.75rem', desktop: '0.875rem' },
    sm: { mobile: '0.875rem', desktop: '1rem' },
    base: { mobile: '1rem', desktop: '1.125rem' },
    lg: { mobile: '1.125rem', desktop: '1.25rem' },
    xl: { mobile: '1.25rem', desktop: '1.5rem' },
    '2xl': { mobile: '1.5rem', desktop: '1.875rem' },
    '3xl': { mobile: '1.875rem', desktop: '2.25rem' },
    '4xl': { mobile: '2.25rem', desktop: '3rem' },
    '5xl': { mobile: '3rem', desktop: '3.75rem' },
  },
  
  // Line heights
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },
  
  // Font weights
  weights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  }
};

export const spacing = {
  // Spacing scale
  0: '0',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
};

export const transitions = {
  fast: '150ms ease-in-out',
  base: '250ms ease-in-out',
  slow: '350ms ease-in-out',
  slower: '500ms ease-in-out',
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};