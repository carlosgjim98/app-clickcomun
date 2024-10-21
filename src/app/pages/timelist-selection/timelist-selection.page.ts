import { Component, OnInit } from '@angular/core';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-timelist-selection',
  templateUrl: './timelist-selection.page.html',
  styleUrls: ['./timelist-selection.page.scss'],
})
export class TimelistSelectionPage implements OnInit {

  isMenuOpen = false; // Variable para manejar el estado del menú
  currentIndex: number = 0; // Para almacenar el índice de la imagen activa
  isFavorite: boolean = false;

  // Array que contiene la información a mostrar según la imagen seleccionada
  timeListInfo: any[] = [
    {
      title: 'Time-List02',
      audioItems: [
        {
          
          title: 'El arte de la resolución | Saltando obstáculos en tu día a día',
          author: 'Antirr84',
          listens: 520,
          duration: '3:22',
          favorites: 25,
          comments: 12,
          icon: 'assets/icons/play--filled--alt.svg', 
          
        },
        {
          title: 'Resolviendo conflictos cotidianos | Apagafuegos',
          author: 'Ramsons',
          listens: 480,
          duration: '4:19',
          favorites: 14,
          comments: 3,
          icon: 'assets/icons/pause-outline.svg',
        },
      ],
    },
    {
      title: 'Top semanal',
      audioItems: [
        {
          title: 'Se acerca la gran depresión | Economía para dummies',
          author: 'User_83459214',
          listens: 1540,
          duration: '2:34',
          favorites: 32,
          comments: 15,
          icon: 'assets/icons/play--filled--alt.svg', 
        },
        {
          title: 'El precio de los alimentos | Apagafuegos',
          author: 'Mark8373',
          listens: 265,
          duration: '4:19',
          favorites: 14,
          comments: 3,
          icon: 'assets/icons/play--filled--alt.svg', 
        },
        {
          title: 'El arte del desiquilibrio emocional | Señor dame paciencia',
          author: 'Antirr84',
          listens: 1205,
          duration: '1:28',
          favorites: 224,
          comments: 120,
          icon: 'assets/icons/play--filled--alt.svg', 
        },

        {
          title: 'Conectando con la gratitud diaria | La alegría infravalorada',
          author: 'Antirr84',
          listens: 1432,
          duration: '2:35',
          favorites: 84,
          comments: 50,
          icon: 'assets/icons/play--filled--alt.svg', 
        },

        {
          title: 'El precio de los alimentos | Apagafuegos',
          author: 'Mark8373',
          listens: 265,
          duration: '4:19',
          favorites: 14,
          comments: 3,
          icon: 'assets/icons/play--filled--alt.svg', 
        },

      ],
    },
  ];
  
  

  constructor() { }

  ngOnInit() {
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        slideChange: () => {
          this.currentIndex = swiper.activeIndex; // Actualiza el índice
        },
      },
    });
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

  toggleFavorite(audioItem) {
    audioItem.isFavorite = !audioItem.isFavorite;
  }


  public toggleState: boolean = false;

  // Método para obtener la información actual basada en el índice
  get currentTimeList() {
    return this.timeListInfo[this.currentIndex] || {};
  }
}

export interface AudioItem {
  title: string;
  author: string;
  listens: number;
  duration: string;
  favorites: number;
  comments: number;
  isFavorite: boolean;  // Nueva propiedad para el estado de favorito
}