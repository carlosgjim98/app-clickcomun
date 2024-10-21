import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public pages = [
    { tab: 'social', name: 'SOCIAL', icon:"assets/icons/social.svg"},
    { tab: 'time-list', name: 'TIME-LIST', icon:"assets/icons/new-playlist.svg"},
    { tab: 'contactos', name: 'CONTACTOS', icon:"assets/icons/group.svg" },
    { tab: 'audiochat', name: 'AUDIOCHAT', icon:"assets/icons/audiochat.svg" }
    
  ];
  constructor() {}

}
