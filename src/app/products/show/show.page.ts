import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  number = 0;
  constructor(private actRoute: ActivatedRoute, private photoViewer: PhotoViewer) { }

  ngOnInit() {
    const id = this.actRoute.snapshot.params.id;
  }

  onViewer(img) {
    this.photoViewer.show(img);
  }

  addCart() {
    this.number += 1;
  }

}
