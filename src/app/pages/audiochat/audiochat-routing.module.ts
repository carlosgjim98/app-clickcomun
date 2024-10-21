import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiochatPage } from './audiochat.page';

const routes: Routes = [
  {
    path: '',
    component: AudiochatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiochatPageRoutingModule {}
