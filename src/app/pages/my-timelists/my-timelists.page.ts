import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-timelists',
  templateUrl: './my-timelists.page.html',
  styleUrls: ['./my-timelists.page.scss'],
})
export class MyTimelistsPage implements OnInit {

  isMenuOpen = false; // Variable para manejar el estado del menú

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

  public toggleState: boolean=false;

}
