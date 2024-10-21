import { Component, OnInit } from '@angular/core';
import { TimeListService } from 'src/app/services/time-list.service'; 
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-create-time-list2',
  templateUrl: './create-time-list2.page.html',
  styleUrls: ['./create-time-list2.page.scss'],
})
export class CreateTimeList2Page implements OnInit {
 
  timeListName: string = '';

  verMas: boolean = false; // Variable booleana para controlar la visibilidad de las categorías

  constructor(private timeListService: TimeListService, private navController: NavController) { }

  ngOnInit() {
    // Obtener el nombre de la Time-List desde el servicio
    this.timeListName = this.timeListService.getTimeListName();
  }

  toggleCategorias() {
    this.verMas = !this.verMas; // Alterna el valor de verMas
  }
}
