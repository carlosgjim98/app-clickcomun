import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-audios',
  templateUrl: './my-audios.page.html',
  styleUrls: ['./my-audios.page.scss'],
})
export class MyAudiosPage implements OnInit {

  isMenuOpen = false; // Variable para manejar el estado del menú
  isModalOpen = false;
  isShareModalOpen = false;


  constructor(private modalController: ModalController) { }

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

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  


  public toggleState: boolean=false;

}
