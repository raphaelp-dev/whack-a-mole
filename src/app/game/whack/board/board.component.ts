import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { miss, whack } from '../whack.actions';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
  }

  click(){
    this.store.dispatch(whack({score : 1}))
  }
  miss(){
    this.store.dispatch(miss({score:1}))
  }

}
