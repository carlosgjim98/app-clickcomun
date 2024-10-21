import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowingUserPage } from './following-user.page';

const routes: Routes = [
  {
    path: '',
    component: FollowingUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowingUserPageRoutingModule {}
