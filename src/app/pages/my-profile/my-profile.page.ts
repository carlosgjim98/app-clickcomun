import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile', 
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  
})
export class MyProfilePage implements OnInit {

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



