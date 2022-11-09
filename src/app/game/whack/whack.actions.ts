import { createAction, props } from "@ngrx/store";

export const whack = createAction(
    "[Board Page] Whack Hit",
    props<any>()
)
export const miss = createAction(
    "[Board Page] Whack Missed",
    props<any>()
)
export const startGame = createAction(
    "[Board Page] Start Game"
)
export const endGame = createAction(
    "[Board Page] End Game",
    props<any>()
)