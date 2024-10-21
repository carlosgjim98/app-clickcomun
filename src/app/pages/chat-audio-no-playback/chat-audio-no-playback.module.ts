import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatAudioNoPlaybackPageRoutingModule } from './chat-audio-no-playback-routing.module';

import { ChatAudioNoPlaybackPage } from './chat-audio-no-playback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatAudioNoPlaybackPageRoutingModule
  ],
  declarations: [ChatAudioNoPlaybackPage]
})
export class ChatAudioNoPlaybackPageModule {}
