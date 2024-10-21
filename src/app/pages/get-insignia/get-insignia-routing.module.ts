import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetInsigniaPage } from './get-insignia.page';

const routes: Routes = [
  {
    path: '',
    component: GetInsigniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetInsigniaPageRoutingModule {}
