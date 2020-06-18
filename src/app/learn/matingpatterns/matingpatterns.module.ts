import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatingpatternsPageRoutingModule } from './matingpatterns-routing.module';

import { MatingpatternsPage } from './matingpatterns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatingpatternsPageRoutingModule
  ],
  declarations: [MatingpatternsPage]
})
export class MatingpatternsPageModule {}
