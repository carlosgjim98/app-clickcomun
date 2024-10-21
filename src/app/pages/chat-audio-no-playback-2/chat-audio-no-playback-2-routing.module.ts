import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatAudioNoPlayback2Page } from './chat-audio-no-playback-2.page';

const routes: Routes = [
  {
    path: '',
    component: ChatAudioNoPlayback2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatAudioNoPlayback2PageRoutingModule {}
