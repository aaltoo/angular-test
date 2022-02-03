import {
  Action,
  createFeatureSelector,
  createReducer,
  on,
  createSelector,
} from '@ngrx/store';
import { toggle } from '../state/actions/dark-mode.actions';

export const DARK_MODE = 'darkMode';

export interface DarkModeState {
  darkMode: boolean;
}

export const initialState: DarkModeState = {
  darkMode: false,
};

export const darkModeReducer = createReducer(
  initialState,
  on(toggle, (state) => ({
    ...state,
    darkMode: !state.darkMode,
  }))
);

export const featureSelector = createFeatureSelector<DarkModeState>(DARK_MODE);
export const darkModeSelector = createSelector(
  featureSelector,
  (state) => state.darkMode
);
