import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/reducers";
import { whackFeatureKey, WhackState } from "./reducers";

export const selectWhackState = createFeatureSelector<WhackState>("whack")

export const displayGame = createSelector(
    selectWhackState,
    (whack) => whack.displayGame
)

export const isFirstGame = createSelector(
    selectWhackState,
    (whack) => whack.isFirstGame
)

export const score = createSelector(
    selectWhackState,
    whack => whack.score
)
export const highScore = createSelector(
    selectWhackState,
    whack => whack.highScore
)