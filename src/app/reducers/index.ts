import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { darkModeReducer, DarkModeState } from './dark-mode';
export interface State {
  darkMode: DarkModeState;
}

export const reducers: ActionReducerMap<State> = {
  darkMode: darkModeReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
