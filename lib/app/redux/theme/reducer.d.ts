import { ReduxActionState } from '../../typings/state';
import { ThemeType } from 'app/styles/theme';
export interface ThemeState {
    mode: ThemeType;
}
declare const themeReducer: (state: ThemeState | undefined, action: ReduxActionState) => {
    mode: string;
};
export default themeReducer;
