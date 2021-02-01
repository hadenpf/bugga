import { DefaultTheme } from 'styled-components';

export const themes: { [key: string]: DefaultTheme } = {
  light: {
    success: '#33B970',
    warning: '#E88D15',
    error: '#CF2828',

    link: '#0C7EE8',

    border: '#D2D2D2',
    box: '#EEEEEE',
  },
};

// todo: add theme-selection logic here!
export const theme = themes.light;
