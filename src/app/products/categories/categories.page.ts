import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  data = [{
    img: '../../../assets/imgs/jeans.jpg',
    name: 'Jeans'
  }, {
    img: '../../../assets/imgs/t4.jpg',
    name: 'T-short'
  }, {
    img: '../../../assets/imgs/nike6.jpg',
    name: 'Trousers'
  }, {
    img: '../../../assets/imgs/nike4.jpg',
    name: 'Cheeky'
  },  {
    img: '../../../assets/imgs/girl.jpg',
    name: 'Bigini'
  }];
  constructor(public menuController: MenuController) { }

  ngOnInit() {
  }

  async openMenu() {
    await this.menuController.open();
  }

}
