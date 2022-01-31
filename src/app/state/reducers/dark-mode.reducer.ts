import { Action, createReducer, on, State } from '@ngrx/store';
import { toggleDarkMode } from '../actions/dark-mode.actions';

export const initialState = true;

const _darkModeReducer = createReducer(
  initialState,
  on(toggleDarkMode, (state) => !state)
);

export function darkModeReducer(state: any, action: Action) {
  return _darkModeReducer(state, action);
}
