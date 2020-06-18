import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldchampionsPage } from './worldchampions.page';

const routes: Routes = [
  {
    path: '',
    component: WorldchampionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorldchampionsPageRoutingModule {}
