import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTimeListPageRoutingModule } from './create-time-list-routing.module';

import { CreateTimeListPage } from './create-time-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTimeListPageRoutingModule
  ],
  declarations: [CreateTimeListPage]
})
export class CreateTimeListPageModule {}
