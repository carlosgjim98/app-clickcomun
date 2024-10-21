import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaSlidePageRoutingModule } from './prueba-slide-routing.module';

import { PruebaSlidePage } from './prueba-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaSlidePageRoutingModule
  ],
  declarations: [PruebaSlidePage]
})
export class PruebaSlidePageModule {}
