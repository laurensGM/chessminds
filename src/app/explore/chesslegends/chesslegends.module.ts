import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChesslegendsPageRoutingModule } from './chesslegends-routing.module';

import { ChesslegendsPage } from './chesslegends.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChesslegendsPageRoutingModule
  ],
  declarations: [ChesslegendsPage]
})
export class ChesslegendsPageModule {}
