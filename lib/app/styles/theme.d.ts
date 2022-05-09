export declare type ThemeType = 'light' | 'dark';
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
export declare const lightTheme: {
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
};
export declare const darkTheme: {
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
};
export declare const ColorTheme: Record<ThemeType, ITheme>;
