import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.page.html',
  styleUrls: ['./help-center.page.scss'],
})
export class HelpCenterPage implements OnInit {

  constructor( private navController: NavController) { }
  goBack() {
    this.navController.back();
  }

  ngOnInit() {
  }

}
