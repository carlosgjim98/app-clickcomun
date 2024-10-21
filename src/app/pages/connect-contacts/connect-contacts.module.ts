import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectContactsPageRoutingModule } from './connect-contacts-routing.module';

import { ConnectContactsPage } from './connect-contacts.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule, 
    FormsModule,
    IonicModule,
    ConnectContactsPageRoutingModule
    
  ],
  declarations: [ConnectContactsPage ]
})
export class ConnectContactsPageModule {}
