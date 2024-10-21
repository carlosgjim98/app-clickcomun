import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileChatPageRoutingModule } from './user-profile-chat-routing.module';

import { UserProfileChatPage } from './user-profile-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfileChatPageRoutingModule
  ],
  declarations: [UserProfileChatPage]
})
export class UserProfileChatPageModule {}
