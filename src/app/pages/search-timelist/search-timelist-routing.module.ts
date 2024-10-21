import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTimelistPage } from './search-timelist.page';

const routes: Routes = [
  {
    path: '',
    component: SearchTimelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTimelistPageRoutingModule {}
