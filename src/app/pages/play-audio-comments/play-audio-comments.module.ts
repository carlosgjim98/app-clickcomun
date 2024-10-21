import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayAudioCommentsPageRoutingModule } from './play-audio-comments-routing.module';

import { PlayAudioCommentsPage } from './play-audio-comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayAudioCommentsPageRoutingModule
  ],
  declarations: [PlayAudioCommentsPage]
})
export class PlayAudioCommentsPageModule {}
