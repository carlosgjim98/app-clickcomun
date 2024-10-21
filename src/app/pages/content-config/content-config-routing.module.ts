import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentConfigPage } from './content-config.page';

const routes: Routes = [
  {
    path: '',
    component: ContentConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentConfigPageRoutingModule {}
