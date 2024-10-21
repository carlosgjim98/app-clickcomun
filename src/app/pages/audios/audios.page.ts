import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.page.html',
  styleUrls: ['./audios.page.scss'],
})
export class AudiosPage implements OnInit {

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

  public toggleState: boolean = false;
}