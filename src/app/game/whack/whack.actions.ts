import { createAction, props } from "@ngrx/store";

export const whack = createAction(
    "[Board Page] Whack Hit",
    props<any>()
)
export const miss = createAction(
    "[Board Page] Whack Missed",
    props<any>()
)