import { Component } from '@angular/core';
import { TimeListService } from 'src/app/services/time-list.service'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-time-list',
  templateUrl: './create-time-list.page.html',
  styleUrls: ['./create-time-list.page.scss'],
})
export class CreateTimeListPage {
  timeListName: string = '';

  constructor(private timeListService: TimeListService, private navController: NavController) { }

  saveTimeListName() {
    // Almacenar el nombre de la Time-List en el servicio
    this.timeListService.setTimeListName(this.timeListName);
    // Navegar a la siguiente página
    this.navController.navigateForward('/create-time-list2');
  }
}
