import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect-contacts',
  templateUrl: './connect-contacts.page.html',
  styleUrls: ['./connect-contacts.page.scss'],
})
export class ConnectContactsPage implements OnInit {

  users = [
    { name: 'Antirr84', audios: 45, followers: 256, avatar: 'assets/imgs/Elipse 47@3x.png' },
    { name: 'User_00', audios: 32, followers: 198, avatar: 'assets/imgs/Elipse 47-1@3x.png' },
    // Agrega más usuarios según sea necesario
  ];

  constructor() { }

  ngOnInit() {}

}
