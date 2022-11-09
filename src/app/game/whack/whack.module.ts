import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromWhack from './reducers';
import { BoardComponent } from './board/board.component';



@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromWhack.whackFeatureKey, fromWhack.whackReducer, { metaReducers: fromWhack.metaReducers })
  ],
  exports: [BoardComponent]
})
export class WhackModule { }
