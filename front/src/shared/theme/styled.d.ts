import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
    };
    fonts: {
      main: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
