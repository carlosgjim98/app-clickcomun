import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatAudioNoPlaybackPage } from './chat-audio-no-playback.page';

const routes: Routes = [
  {
    path: '',
    component: ChatAudioNoPlaybackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatAudioNoPlaybackPageRoutingModule {}
