import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelistSelectionPage } from './timelist-selection.page';

const routes: Routes = [
  {
    path: '',
    component: TimelistSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelistSelectionPageRoutingModule {}
