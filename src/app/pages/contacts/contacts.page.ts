import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  isMenuOpen = false; // Variable para manejar el estado del menú
  toggleState: boolean = false; // Variable para manejar otra funcionalidad (si es necesario)

  showMore: boolean = false; // Controlar el estado de "Mostrar más/menos"
  initialLimit: number = 1; // Número de usuarios iniciales visibles
  users = [ // Lista de usuarios
    { name: 'User_00', audios: 45, followers: 256, avatar: 'assets/imgs/Elipse 47-1@3x.png'  },
    { name: 'User_00', audios: 45, followers: 256, avatar: 'assets/imgs/Elipse 47-3@3x.png'},
    { name: 'User_00', audios: 30, followers: 123, avatar: 'assets/imgs/Elipse 47-5@3x.png' },
    // Añade más usuarios aquí
  ];

  visibleUsers = [];

  constructor() {}

  ngOnInit() {
    // Mostrar solo un número inicial de usuarios
    this.visibleUsers = this.users.slice(0, this.initialLimit);
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

  // Función para alternar "Mostrar más" o "Mostrar menos"
  toggleShowMore() {
    this.showMore = !this.showMore;

    if (this.showMore) {
      // Mostrar todos los usuarios
      this.visibleUsers = this.users;
    } else {
      // Volver a mostrar solo los usuarios iniciales
      this.visibleUsers = this.users.slice(0, this.initialLimit);
    }
  }
}
