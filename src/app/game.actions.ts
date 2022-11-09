import { createAction, props } from "@ngrx/store";

export const startGame = createAction(
    "[Main Page] Start Clicked",
    props<any>()
)
export const endGame = createAction(
    "[Main Page] Game Over",
    props<any>()
)