import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-adult-verification',
  templateUrl: './adult-verification.page.html',
  styleUrls: ['./adult-verification.page.scss'],
})
export class AdultVerificationPage implements OnInit {

  isChecked = false;
  
  toggleCheck() {
    this.isChecked = !this.isChecked;
  }

  constructor( private navController: NavController) { }
  goBack() {
    this.navController.back();
  }

  ngOnInit() {
  }

}
