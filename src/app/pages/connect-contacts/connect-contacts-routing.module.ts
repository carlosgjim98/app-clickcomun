import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectContactsPage } from './connect-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectContactsPageRoutingModule {}
