import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplorePage } from './explore.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage
  },
  {
    path: 'chesslegends',
    loadChildren: () => import('./chesslegends/chesslegends.module').then( m => m.ChesslegendsPageModule)
  },
  {
    path: 'openings',
    loadChildren: () => import('./openings/openings.module').then( m => m.OpeningsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorePageRoutingModule {}
