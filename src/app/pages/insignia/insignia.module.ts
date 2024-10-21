import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsigniaPageRoutingModule } from './insignia-routing.module';

import { InsigniaPage } from './insignia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsigniaPageRoutingModule
  ],
  declarations: [InsigniaPage]
})
export class InsigniaPageModule {}
