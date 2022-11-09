import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { WhackActions } from '../actions-types';

export const whackFeatureKey = 'whack';

export interface WhackState {
  score: number
}
export const initialScoreState : WhackState = {
  score : 0
}

export const whackReducer = createReducer(
  initialScoreState,
  on(WhackActions.whack, (state, action) => {
    return {
      score : state.score + action.score
    }
  }),
  on(WhackActions.miss, (state, action) => {
    return {
      score : state.score === 0 ? 0 : state.score - action.score
    }
  })
)


export const metaReducers: MetaReducer<WhackState>[] = !environment.production ? [] : [];
