import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-collections',
  templateUrl: './list-collections.page.html',
  styleUrls: ['./list-collections.page.scss'],
})
export class ListCollectionsPage implements OnInit {

  data = [
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
    }, ,
    {
      id: '1',
      name: 'Clothes 4',
      img: '../../../assets/imgs/t5.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '2',
      name: 'Clothes 5',
      img: '../../../assets/imgs/nike8.jpeg',
      detail: 'little come from france',
      price: '88.22'
    },
  ];
  collectionName;
  searchBar = false;
  constructor(public actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.collectionName = this.actRoute.snapshot.params.name;
  }

  // refresh data
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
