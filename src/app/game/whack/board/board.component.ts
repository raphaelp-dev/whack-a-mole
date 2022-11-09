import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { GameService } from 'src/app/services/game.service';
import { WhackActions } from '../actions-types';
import { miss, whack } from '../whack.actions';
import { displayGame, highScore, isFirstGame, score } from '../whack.selectors';

const btnActions = {
  start: "Start!",
  playAgain : "Play Again!"
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  intervalManager : any
  currentMole: number = 0
  score = 0
  countdown = 30
  clickCount = 0
  $displayGame : Observable<boolean> = this.store.pipe(
    select(displayGame)
  )
  $isFirstGame : Observable<boolean> = this.store.pipe(
    select(isFirstGame)
  )

  $score  = this.store.pipe(
    select(score)
  )
  $highScore  = this.store.pipe(
    select(highScore)
  )

  $getButtonLabel = this.store.pipe(
    select(isFirstGame),
    map(val => {
      if(val){
        return btnActions.start
      }
      else{
        return btnActions.playAgain
      }
    })
  )


  constructor(private store : Store<AppState>) { }


  start(){
    this.countdown=30
    this.store.dispatch(WhackActions.startGame())
    this.generateMoles()
    const countdownInterval = setInterval(()=> {
      this.countdown-=1
    },1000)
    setTimeout(()=> {
      this.store.dispatch(WhackActions.endGame({score: this.score}))
      clearInterval(this.intervalManager)
      clearInterval(countdownInterval)
      this.score=0
    }, 10000)

  }

  generateMoles(){
    let previous = 0

    this.intervalManager = setInterval(()=>{
      if(previous!=0){
        document.getElementById(previous.toString())!.style.background = 'none'
      }
      if(this.clickCount==0 && previous!=0){
        this.score = this.score<0 ? 0 : this.score-1
        this.store.dispatch(miss({score:1}))
      }
     
      this.clickCount=0
      this.currentMole= Math.floor(Math.random() * (7-1) + 1)
      if(previous==this.currentMole){
        clearInterval(this.intervalManager)
        return this.generateMoles()
      }
      previous = this.currentMole
      document.getElementById(this.currentMole.toString())!.style.background = 'black'
      this.clickCount=0
    },Math.floor(Math.random() * (3000 - 1000) + 1000))
    
  }



  click(event : any){
    if(this.clickCount>0) return
    if(event.target.id == this.currentMole){
      this.clickCount = 1
      this.score+=1
      return this.store.dispatch(whack({score : 1}))
    }
  }

}
