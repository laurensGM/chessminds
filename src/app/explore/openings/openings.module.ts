import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpeningsPageRoutingModule } from './openings-routing.module';

import { OpeningsPage } from './openings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpeningsPageRoutingModule
  ],
  declarations: [OpeningsPage]
})
export class OpeningsPageModule {}
