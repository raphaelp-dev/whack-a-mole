import { state } from '@angular/animations';
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
import { displayGame, highScore, isFirstGame, score } from '../whack.selectors';

export const whackFeatureKey = "whack";

export interface WhackState {
  score: number
  displayGame : boolean,
  isFirstGame : boolean,
  highScore: number
}
export const initialScoreState : WhackState = {
  score : 0,
  displayGame : false,
  isFirstGame: true,
  highScore: 0
}

export const whackReducer = createReducer(
  initialScoreState,
  on(WhackActions.whack, (state, action) => {
    return {
      ...state,
     score : state.score + action.score, 

    }
  }),
  on(WhackActions.miss, (state, action) => {
    initialScoreState
    return {
      ...state,
      score :( state.score ===0 ? 0 :  state.score - action.score), 

    }
  }),
  on(WhackActions.startGame, (state, action)=> {
    return {
      ...state,
      isFirstGame: false,
      displayGame:true,
      score:  0

    }
  }),
  on(WhackActions.endGame, (state, action)=> {
    console.log(state.highScore)
    return {
      isFirstGame: false,
      score: action.score,
      highScore: (action.score > state.highScore ? action.score : state.highScore),
      displayGame : false,

    }
  })
)