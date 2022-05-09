export declare const selectThemeMode: ((state: {
    theme: import("./reducer").ThemeState;
}) => import("../../styles/theme").ThemeType) & import("reselect").OutputSelectorFields<(args_0: import("./reducer").ThemeState) => import("../../styles/theme").ThemeType & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
