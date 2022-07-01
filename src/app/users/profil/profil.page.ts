import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  img = '../../../assets/imgs/profilgirl.jpg';
  data = [
    {
      id: '1',
      name: 'Clothes 1',
      img: '../../../assets/imgs/jeans.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '2',
      name: 'Clothes 2',
      img: '../../../assets/imgs/nike1.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '3',
      name: 'Clothes 3',
      img: '../../../assets/imgs/nike2.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '4',
      name: 'Clothes 4',
      img: '../../../assets/imgs/robe.png',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '5',
      name: 'Clothes 5',
      img: '../../../assets/imgs/nike8.jpeg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '6',
      name: 'Clothes 7',
      img: '../../../assets/imgs/t4.jpg',
      detail: 'little come from france',
      price: '88.22'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
