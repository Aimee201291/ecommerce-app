import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.scss'],
})
export class CollectionsPage implements OnInit {
  data = [{
    img: '../../../assets/imgs/gucci.jpg',
    name: 'Gucci'
  }, {
    img: '../../../assets/imgs/nike.jpg',
    name: 'Nike'
  }, {
    img: '../../../assets/imgs/adidas.jpg',
    name: 'Adidas'
  }, {
    img: '../../../assets/imgs/dg.jpg',
    name: 'Dolce & Gabana'
  },  {
    img: '../../../assets/imgs/dg.jpg',
    name: 'Louis vitton'
  }];
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }


  async openMenu() {
    await this.menuController.open();
  }

}
