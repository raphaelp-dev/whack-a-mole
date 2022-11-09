import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { WhackActions } from './actions-types';
import { tap } from 'rxjs/operators';

@Injectable()
export class Whackffects {

constructor(private actions$: Actions) {}

  start$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(WhackActions.startGame),
        tap((action) => console.log('Get ready!'))
      ),
    { dispatch: false }
  );

  end$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(WhackActions.endGame),
        tap((action) => console.log('Time is up!'))
      ),
    { dispatch: false }
  );


}
