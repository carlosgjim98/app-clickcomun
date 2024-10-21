import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-time-list2',
  templateUrl: './create-time-list2.page.html',
  styleUrls: ['./create-time-list2.page.scss'],
})
export class CreateTimeList2Page implements OnInit {
 
  verMas: boolean = false; // Variable booleana para controlar la visibilidad de las categorías

  constructor() { }

  ngOnInit() {
  }

  toggleCategorias() {
    this.verMas = !this.verMas; // Alterna el valor de verMas
  }
}
