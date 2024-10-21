import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdultVerificationPage } from './adult-verification.page';

const routes: Routes = [
  {
    path: '',
    component: AdultVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdultVerificationPageRoutingModule {}
