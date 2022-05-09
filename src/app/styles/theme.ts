export type ThemeType = 'light' | 'dark';

export interface ITheme {
  colors: {
    background: string;
    default: string;
    gray: string;
    white: string;
    black: string;
    border: string;
    text00: string;
    text01: string;
    text02: string;
    text03: string;
    text04: string;
  };
}

export const lightTheme = {
  colors: {
    background: '#f7f6f9',
    default: '#fff',
    gray: '#d9d9d9',
    white: '#fff',
    black: '#000',
    border: '#dbdbdb',
    text00: 'rgba(0,0,0,1)',
    text01: 'rgba(0,0,0,0.85)',
    text02: 'rgba(0,0,0,0.65)',
    text03: 'rgba(0,0,0,0.45)',
    text04: 'rgba(0,0,0,0.2)',
  },
};

export const darkTheme = {
  colors: {
    background: '#18181b',
    default: '#0e0e10',
    gray: '#d9d9d9',
    white: '#fff',
    black: '#000',
    border: '#27272a',
    text00: 'rgba(255, 255, 255, 1)',
    text01: 'rgba(255, 255, 255, 0.85)',
    text02: 'rgba(255, 255, 255, 0.65)',
    text03: 'rgba(255, 255, 255, 0.45)',
    text04: 'rgba(255, 255, 255, 0.2)',
  },
};

export const ColorTheme: Record<ThemeType, ITheme> = {
  light: lightTheme,
  dark: darkTheme,
};
