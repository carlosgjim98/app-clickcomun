import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayAudioCommentsPage } from './play-audio-comments.page';

const routes: Routes = [
  {
    path: '',
    component: PlayAudioCommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayAudioCommentsPageRoutingModule {}
