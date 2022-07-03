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
    name: 'Entradas'
  }, {
    img: '../../../assets/imgs/entradas/4estaciones.JPG',
    name: 'Pizzas tradicionales'
  }, {
    img: '../../../assets/imgs/entradas/triple_pepperoni.JPG',
    name: 'Especialidades Al quadrado'
  }, {
    img: '../../../assets/imgs/entradas/galletas.JPG',
    name: 'Postres Al quadrado'
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
