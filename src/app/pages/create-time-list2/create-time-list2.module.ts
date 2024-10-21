import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTimeList2PageRoutingModule } from './create-time-list2-routing.module';

import { CreateTimeList2Page } from './create-time-list2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTimeList2PageRoutingModule
  ],
  declarations: [CreateTimeList2Page]
})
export class CreateTimeList2PageModule {}
