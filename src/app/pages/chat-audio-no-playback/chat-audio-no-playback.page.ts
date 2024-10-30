import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-chat-audio-no-playback',
  templateUrl: './chat-audio-no-playback.page.html',
  styleUrls: ['./chat-audio-no-playback.page.scss'],
})
export class ChatAudioNoPlaybackPage implements OnInit {

  isRecording: boolean = false;
  isModalOpen = false;
  isShareModalOpen = false;
  isPlaying: boolean = false; 

 

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  openShareModal() {
    this.isShareModalOpen = true;
  }

  closeShareModal() {
    this.isShareModalOpen = false;
  }


  toggleRecording() {
    this.isRecording = !this.isRecording;
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;  // Cambia el estado de reproducción
    // Aquí puedes agregar lógica adicional para reproducir o pausar el audio
    if (this.isPlaying) {
      console.log("Reproduciendo audio...");
      // Aquí va tu lógica para iniciar la reproducción
    } else {
      console.log("Audio pausado.");
      // Aquí va tu lógica para pausar la reproducción
    }
  }
}
