import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAudiosPageRoutingModule } from './my-audios-routing.module';

import { MyAudiosPage } from './my-audios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAudiosPageRoutingModule
  ],
  declarations: [MyAudiosPage]
})
export class MyAudiosPageModule {}
