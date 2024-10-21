import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat-audio-no-playback-2',
  templateUrl: './chat-audio-no-playback-2.page.html',
  styleUrls: ['./chat-audio-no-playback-2.page.scss'],
})
export class ChatAudioNoPlayback2Page implements OnInit {

  isRecording: boolean = false;
  isModalOpen = false;
  isShareModalOpen = false;
  isMenuOpen = false;
  isMicActive = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  toggleMic() {
    this.isMicActive = !this.isMicActive; // Alterna el estado del micrófono
    this.toggleMenu(); // Opcionalmente, si quieres que el menú se abra/cierre
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