import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
data = [{
          id: '1',
          name: 'Title product',
          detail: 'litle detail of product',
          img : '../../../assets/imgs/t1.jpg',
          price: '55.21'
        },
        {
          id: '2',
          name: '2 Title product',
          detail: 'litle detail of product',
          img : '../../../assets/imgs/t2.jpg',
          price: '68.21'
        }];
  constructor() { }

  ngOnInit() {
  }

  onDeleteFromList(id) {
  }

}
