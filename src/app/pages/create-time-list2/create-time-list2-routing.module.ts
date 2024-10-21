import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTimeList2Page } from './create-time-list2.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTimeList2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTimeList2PageRoutingModule {}
