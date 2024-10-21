import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTimelistsPageRoutingModule } from './my-timelists-routing.module';

import { MyTimelistsPage } from './my-timelists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTimelistsPageRoutingModule
  ],
  declarations: [MyTimelistsPage]
})
export class MyTimelistsPageModule {}
