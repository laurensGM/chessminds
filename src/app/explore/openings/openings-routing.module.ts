import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpeningsPage } from './openings.page';

const routes: Routes = [
  {
    path: '',
    component: OpeningsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpeningsPageRoutingModule {}
