import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatAudioNoPlayback2PageRoutingModule } from './chat-audio-no-playback-2-routing.module';

import { ChatAudioNoPlayback2Page } from './chat-audio-no-playback-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatAudioNoPlayback2PageRoutingModule
  ],
  declarations: [ChatAudioNoPlayback2Page]
})
export class ChatAudioNoPlayback2PageModule {}
