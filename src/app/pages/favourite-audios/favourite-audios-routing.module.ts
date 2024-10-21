import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouriteAudiosPage } from './favourite-audios.page';

const routes: Routes = [
  {
    path: '',
    component: FavouriteAudiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouriteAudiosPageRoutingModule {}
