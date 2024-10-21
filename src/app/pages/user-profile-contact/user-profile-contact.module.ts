import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfileContactPageRoutingModule } from './user-profile-contact-routing.module';

import { UserProfileContactPage } from './user-profile-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfileContactPageRoutingModule
  ],
  declarations: [UserProfileContactPage]
})
export class UserProfileContactPageModule {}
