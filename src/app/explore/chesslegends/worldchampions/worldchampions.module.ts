import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldchampionsPageRoutingModule } from './worldchampions-routing.module';

import { WorldchampionsPage } from './worldchampions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldchampionsPageRoutingModule
  ],
  declarations: [WorldchampionsPage]
})
export class WorldchampionsPageModule {}
