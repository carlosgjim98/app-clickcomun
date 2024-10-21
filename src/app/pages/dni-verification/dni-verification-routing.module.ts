import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DniVerificationPage } from './dni-verification.page';

const routes: Routes = [
  {
    path: '',
    component: DniVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DniVerificationPageRoutingModule {}
