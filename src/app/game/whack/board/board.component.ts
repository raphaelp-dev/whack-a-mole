import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { GameService } from 'src/app/services/game.service';
import { WhackActions } from '../actions-types';
import { miss, whack } from '../whack.actions';
import { displayGame, isFirstGame } from '../whack.selectors';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  $displayGame : Observable<boolean> = this.store.pipe(
    select(displayGame)
  )
  $isFirstGame : Observable<boolean> = this.store.pipe(
    select(isFirstGame)
  )


  constructor(private store : Store<AppState>) { }


  start(){
    this.store.dispatch(WhackActions.startGame())
    setTimeout(()=> this.store.dispatch(WhackActions.endGame()), 3000)
  }

  click(){
    this.store.dispatch(whack({score : 1}))
  }
  miss(){
    this.store.dispatch(miss({score:1}))
  }

}
