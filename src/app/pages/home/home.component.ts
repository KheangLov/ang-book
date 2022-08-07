import { Component, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('slider', { static: false }) slider!: NzCarouselComponent;

  numberFormat = { notation: 'compact', compactDisplay: 'short' };
  sliderList = [
    {
      image:
        'https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/gallery-post-02.jpg',
      title: '4 types of research methods all designers should know',
      category: 'design',
      author: {
        profile:
          'https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/author/author-image-3.png',
        name: 'Rahabi Khan',
      },
      published_date: new Date(),
      view: 300000,
    },
    {
      image:
        'https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/gallery-post-02.jpg',
      title: '4 types of research methods all designers should know',
      category: 'design',
      author: {
        profile: '',
        name: 'Kheang',
      },
      published_date: new Date(),
      view: 300000,
    },
  ];
  data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  constructor() {}

  getBgImageStyle(image: string) {
    return { 'background-image': `url(${image})` };
  }

  next() {
    this.slider.next();
  }

  prev() {
    this.slider.pre();
  }
}
