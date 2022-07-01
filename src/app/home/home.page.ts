import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  pageTitle: string;
  searchBar = false;
  data: any[];
  menList = [
    {
      id: '4',
      name: 'Clothes 4',
      img: '../../../assets/imgs/nike7.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '1',
      name: 'Clothes 1',
      img: '../../../assets/imgs/veste.png',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '2',
      name: 'Clothes 2',
      img: '../../../assets/imgs/nike8.jpeg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '3',
      name: 'Clothes 3',
      img: '../../../assets/imgs/nike6.jpg',
      detail: 'little come from france',
      price: '88.22'
    },  {
      id: '1',
      name: 'Clothes 1',
      img: '../../../assets/imgs/veste.png',
      detail: 'little come from france',
      price: '88.22'
    }, {
      id: '4',
      name: 'Clothes 4',
      img: '../../../assets/imgs/nike7.jpg',
      detail: 'little come from france',
      price: '88.22'
    }
  ];

  womenList = [
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
      img: '../../../assets/imgs/nike3.jpg',
      detail: 'little come from france',
      price: '88.22'
    }, {
      id: '2',
      name: 'Clothes 2',
      img: '../../../assets/imgs/nike1.jpg',
      detail: 'little come from france',
      price: '88.22'
    },  {
      id: '1',
      name: 'Clothes 1',
      img: '../../../assets/imgs/jeans.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
  ];

  constructor( public actRoute: ActivatedRoute, public menuController: MenuController) {}

  ngOnInit(): void {
    const genre = this.actRoute.snapshot.params.genre;
    this.pageTitle = (genre === 'woman') ? 'Women' : 'Men';
    this.data = (genre === 'woman') ? this.womenList : this.menList;
  }

  /// open menu
  async openMenu() {
    await this.menuController.toggle();
  }

  // Refresh Data
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  // Load Data for infinite scroll
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

}
