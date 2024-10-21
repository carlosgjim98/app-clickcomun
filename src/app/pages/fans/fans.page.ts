import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.page.html',
  styleUrls: ['./fans.page.scss'],
})
export class FansPage implements OnInit {

 
  isMenuOpen = false; // Variable para manejar el estado del menú
  toggleState: boolean = false; // Variable para manejar otra funcionalidad (si es necesario)

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    const buttonMenu = document.getElementById('buttonMenu');
    const micButton = document.getElementById('micButton');
    
    if (this.isMenuOpen) {
      buttonMenu.style.display = 'none';
      micButton.classList.remove('active');
    } else {
      buttonMenu.style.display = 'flex';
      micButton.classList.add('active');
    }

    this.isMenuOpen = !this.isMenuOpen;
  }

}
