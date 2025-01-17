import { Component, OnInit, } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  
})
export class NotificationsPage implements OnInit {
  
  public toggleState: boolean=false;


  constructor( private navController: NavController) { }
  goBack() {
    this.navController.back();
  }

  ngOnInit() {
  }

}
