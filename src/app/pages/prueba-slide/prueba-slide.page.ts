import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-slide',
  templateUrl: './prueba-slide.page.html',
  styleUrls: ['./prueba-slide.page.scss'],
})
export class PruebaSlidePage implements OnInit {

  constructor() { }

  option = {
    initialSlide: 0,
    speed: 400,
    CenteredSlides:true,
    loop:true,
    spaceBetween:10,
    //autoplay:true,
    // Otras opciones que necesites
  };

  ngOnInit() {
  }

}
