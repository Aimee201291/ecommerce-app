import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-present',
  templateUrl: './present.page.html',
  styleUrls: ['./present.page.scss'],
})
export class PresentPage implements OnInit {
  logo = '../../../assets/imgs/logos/logo_2.jpg';
  man = '../../../assets/imgs/presentboy.jpg';
  constructor() { }

  ngOnInit() {
  }

}
