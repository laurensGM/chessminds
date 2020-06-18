import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChesslegendsPage } from './chesslegends.page';

const routes: Routes = [
  {
    path: '',
    component: ChesslegendsPage
  },
  {
    path: 'worldchampions',
    loadChildren: () => import('./worldchampions/worldchampions.module').then( m => m.WorldchampionsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChesslegendsPageRoutingModule {}
