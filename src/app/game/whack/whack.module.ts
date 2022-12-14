import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromWhack from './reducers';
import { BoardComponent } from './board/board.component';
import {EffectsModule} from '@ngrx/effects'
import { Whackffects } from './whack.effects';



@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromWhack.whackFeatureKey, fromWhack.whackReducer),
    EffectsModule.forFeature([Whackffects])
  ],
  exports: [BoardComponent]
})
export class WhackModule { }
