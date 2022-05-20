import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string;
      backgroundReversed: string;
      default: string;
      defaultReversed: string;
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
}
