import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  data = [{
    img: '../../../assets/imgs/entradas/chistobites.JPG',
    name: 'Entradas',
    urlName: 'entradas'
  }, {
    img: '../../../assets/imgs/entradas/4estaciones.JPG',
    name: 'Pizzas tradicionales',
    urlnName: 'pizzas-tradicionales'
  }, {
    img: '../../../assets/imgs/entradas/triple_pepperoni.JPG',
    name: 'Especialidades Al Quadrado',
    urlName: 'especialidades-al-quadrado'
  }, {
    img: '../../../assets/imgs/entradas/galletas.JPG',
    name: 'Postres Al qQuadrado',
    urlName: 'postres-al-quadrado'
  }/*,  {
    img: '../../../assets/imgs/girl.jpg',
    name: 'Bigini'
  }*/];

  constructor(public menuController: MenuController) { }

  ngOnInit() {
  }

  async openMenu() {
    await this.menuController.open();
  }

}
