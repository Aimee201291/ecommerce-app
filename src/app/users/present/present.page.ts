import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-present',
  templateUrl: './present.page.html',
  styleUrls: ['./present.page.scss'],
})
export class PresentPage implements OnInit {
  woman = '../../../assets/imgs/presentgirl.jpg';
  man = '../../../assets/imgs/presentboy.jpg';
  constructor() { }

  ngOnInit() {
  }

}
