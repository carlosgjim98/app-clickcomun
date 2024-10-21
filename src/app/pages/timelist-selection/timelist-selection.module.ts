import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { TimelistSelectionPageRoutingModule } from './timelist-selection-routing.module';

import { TimelistSelectionPage } from './timelist-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimelistSelectionPageRoutingModule
  ],
  declarations: [TimelistSelectionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
  
})
export class TimelistSelectionPageModule {}
