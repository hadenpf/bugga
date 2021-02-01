import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    success: string;
    warning: string;
    error: string;

    link: string;

    border: string;
    box: string;
  }
}
