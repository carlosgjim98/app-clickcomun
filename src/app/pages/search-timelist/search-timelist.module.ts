import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchTimelistPageRoutingModule } from './search-timelist-routing.module';

import { SearchTimelistPage } from './search-timelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchTimelistPageRoutingModule
  ],
  declarations: [SearchTimelistPage]
})
export class SearchTimelistPageModule {}
