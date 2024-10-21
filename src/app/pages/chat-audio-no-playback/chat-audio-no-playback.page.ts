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
}
