import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinternary: string;
      senerary: string;
      background: string;
      text: string;
      cardGrey: string;
      cardGreen: string;
      cardYellow: string;
      cardRed: string;
      greenLight: string;
      green: string;
      greenDark: string;
      headerBg: string;
      headerButton: string;
      headerButtonText: string;
    };
  }
}
