import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TimeListService } from 'src/app/services/time-list.service';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.page.html',
  styleUrls: ['./time-list.page.scss'],
})
export class TimeListPage implements OnInit {
  timeListName: string;
  isFavorite: boolean = false; 

  constructor( private navController: NavController, private timeListService: TimeListService) { }
  goBack() {
    this.navController.back();
  }

  ngOnInit() {
    // Obtener el nombre de la Time-List desde el servicio
    this.timeListName = this.timeListService.getTimeListName();
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;  // Cambiar el estado
  }

}
