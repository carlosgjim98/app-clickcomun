import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dni-verification',
  templateUrl: './dni-verification.page.html',
  styleUrls: ['./dni-verification.page.scss'],
})
export class DniVerificationPage implements OnInit {

  constructor( private navController: NavController) { }
  goBack() {
    this.navController.back();
  }


  ngOnInit() {
  }

}
