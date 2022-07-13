import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  data2 = [{
    img: '../../../assets/imgs/entradas2/chistobites.JPG',
    name: 'Entradas',
    urlName: 'entradas'
  }, {
    img: '../../../assets/imgs/entradas2/4estaciones.JPG',
    name: 'Pizzas tradicionales',
    urlnName: 'pizzas-tradicionales'
  }, {
    img: '../../../assets/imgs/entradas2/triple_pepperoni.JPG',
    name: 'Especialidades Al Quadrado',
    urlName: 'especialidades-al-quadrado'
  }, {
    img: '../../../assets/imgs/entradas2/galletas.JPG',
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

  opts = {
    freeMode: true,
    slidesPerView: 2.6,
    slidesOffsetBefore: 30,
    slidesOffsetAfter: 100
  }

  scrollToLabel(title) {
    var titleELe = document.getElementById(title);
    this.content.scrollToPoint(0, titleELe.offsetTop - 30);
  }

}
