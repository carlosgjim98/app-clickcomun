import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-content-config',
  templateUrl: './content-config.page.html',
  styleUrls: ['./content-config.page.scss'],
})
export class ContentConfigPage implements OnInit {

  constructor( private navController: NavController) { }
  goBack() {
    this.navController.back();
  }


 

  ngOnInit() {
  }

}
