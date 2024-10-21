import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTimelistsPage } from './my-timelists.page';

const routes: Routes = [
  {
    path: '',
    component: MyTimelistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTimelistsPageRoutingModule {}
