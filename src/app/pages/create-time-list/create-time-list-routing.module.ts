import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTimeListPage } from './create-time-list.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTimeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTimeListPageRoutingModule {}
