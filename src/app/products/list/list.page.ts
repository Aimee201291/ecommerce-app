import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  data = [
    {
      id: '1',
      name: 'Pizza Al Quadrado Especial',
      img: '../../../assets/imgs/especialidades/especial.JPG',
      detail: 'Queso mozzarella, salsa napole, salchicha italiana, pepperoni, jamón, maíz.',
      price: '$14'
    },
    {
      id: '2',
      name: 'Montserratina',
      img: '../../../assets/imgs/especialidades/la-montserratina.JPG',
      detail: 'Queso mozzarella, salsa napole, chorizo de ajo, chorizo ahumado, chistorra, cebolla y pimentón.',
      price: '$14'
    },
    {
      id: '3',
      name: 'Tocinetor',
      img: '../../../assets/imgs/especialidades/tocinetor.JPG',
      detail: 'Queso mozzarella, salsa napole y 300 gr de tocineta.',
      price: '$14'
    },
    {
      id: '4',
      name: 'Triple pepperoni',
      img: '../../../assets/imgs/especialidades/triple-pepperoni.JPG',
      detail: 'Queso mozzarella, salsa napole y 300 gr de pepperoni',
      price: '$16'
    }/*,
    {
      id: '4',
      name: 'Clothes 4',
      img: '../../../assets/imgs/t5.jpg',
      detail: 'little come from france',
      price: '88.22'
    },
    {
      id: '3',
      name: 'Clothes 5',
      img: '../../../assets/imgs/t1.jpg',
      detail: 'little come from france',
      price: '88.22'
    }*/
  ];
  categoryName;
  searchBar = false;
  constructor(public actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoryName = this.actRoute.snapshot.params.name;
    while(this.categoryName.indexOf("-") != -1) {
      this.categoryName = this.categoryName.replace('-', ' ');
    }
    this.categoryName = this.capitalizeFirstLetter(this.categoryName);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
