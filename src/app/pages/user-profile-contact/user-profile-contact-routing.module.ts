import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileContactPage } from './user-profile-contact.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfileContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileContactPageRoutingModule {}
