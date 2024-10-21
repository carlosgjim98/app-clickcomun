import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowingUserPageRoutingModule } from './following-user-routing.module';

import { FollowingUserPage } from './following-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowingUserPageRoutingModule
  ],
  declarations: [FollowingUserPage]
})
export class FollowingUserPageModule {}
