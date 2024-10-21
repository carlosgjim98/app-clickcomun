import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentConfigPageRoutingModule } from './content-config-routing.module';

import { ContentConfigPage } from './content-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentConfigPageRoutingModule
  ],
  declarations: [ContentConfigPage]
})
export class ContentConfigPageModule {}
