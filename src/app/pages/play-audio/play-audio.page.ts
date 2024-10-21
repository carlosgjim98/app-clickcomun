import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-audio',
  templateUrl: './play-audio.page.html',
  styleUrls: ['./play-audio.page.scss'],
})
export class PlayAudioPage implements OnInit {
  isFavorite: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;  // Cambiar el estado
  }
}
