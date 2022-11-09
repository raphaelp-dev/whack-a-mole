import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, switchMap } from "rxjs";

@Injectable()
export class GameService {
    private $gameStateBehavior = new BehaviorSubject({
        displayGame : false,
        firstGame : true
    })
    $gameState = this.$gameStateBehavior.asObservable()

    startGame(){
        this.$gameStateBehavior.next({displayGame: true, firstGame: false})
        console.log('game started')
        setTimeout(()=> this.$gameStateBehavior.next({displayGame: false, firstGame: false}), 3000)
        console.log('game ended')
    }
}