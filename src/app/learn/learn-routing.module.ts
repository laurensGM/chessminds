import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnPage } from './learn.page';

const routes: Routes = [
  {
    path: '',
    component: LearnPage
  },
  {
    path: 'matingpatterns',
    loadChildren: () => import('./matingpatterns/matingpatterns.module').then( m => m.MatingpatternsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnPageRoutingModule {}
