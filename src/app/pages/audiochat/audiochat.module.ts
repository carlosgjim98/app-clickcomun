import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiochatPageRoutingModule } from './audiochat-routing.module';

import { AudiochatPage } from './audiochat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiochatPageRoutingModule
  ],
  declarations: [AudiochatPage]
})
export class AudiochatPageModule {}
