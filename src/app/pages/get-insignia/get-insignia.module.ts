import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetInsigniaPageRoutingModule } from './get-insignia-routing.module';

import { GetInsigniaPage } from './get-insignia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetInsigniaPageRoutingModule
  ],
  declarations: [GetInsigniaPage]
})
export class GetInsigniaPageModule {}
