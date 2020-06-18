import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatingpatternsPage } from './matingpatterns.page';

const routes: Routes = [
  {
    path: '',
    component: MatingpatternsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatingpatternsPageRoutingModule {}
