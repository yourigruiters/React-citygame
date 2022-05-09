import { TOGGLE_THEME_MODE } from './types';
import { ReduxActionState } from '../../typings/state';
import { ThemeType } from 'app/styles/theme';

export interface ThemeState {
  mode: ThemeType;
}

const initialState: ThemeState = {
  mode: 'light',
};

const themeReducer = (
  state = initialState,
  action: ReduxActionState,
) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_THEME_MODE: {
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light',
      };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
