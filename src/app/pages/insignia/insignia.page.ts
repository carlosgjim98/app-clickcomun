import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-insignia',
  templateUrl: './insignia.page.html',
  styleUrls: ['./insignia.page.scss'],
})
export class InsigniaPage implements OnInit {

  constructor( private navController: NavController) { }
  goBack() {
    this.navController.back();
  }

  ngOnInit() {
  }

}
