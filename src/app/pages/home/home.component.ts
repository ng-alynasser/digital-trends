import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  options: SwiperConfigInterface = {
    direction: 'horizontal',
    keyboard: true,
    mousewheel: true,
    navigation: true,
    pagination: true,
    autoplay: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };

  sliderImages = [
    'assets/images/clients/al-saif-home.png',
    'assets/images/clients/al-waha-gate.png',
    'assets/images/clients/Al-waha-waves.png',
    'assets/images/clients/alsaif-elec.png',
    'assets/images/clients/Alsalman.png',
    'assets/images/clients/as.png',
    'assets/images/clients/Awaaed.png',
    'assets/images/clients/business-center.png',
    'assets/images/clients/dates-mroe.jpg',
    'assets/images/clients/ddksa.png',
    'assets/images/clients/green-apple.png',
    'assets/images/clients/hyaza.png',
    'assets/images/clients/Jicdal.png',
    'assets/images/clients/khayam.png',
    'assets/images/clients/shake-shack.png',
    'assets/images/clients/Takamol.png',
    'assets/images/clients/THE-ROOFS-2.png',
    'assets/images/clients/the-roofs-villa.png',
    'assets/images/clients/THE-ROOFS.png',
    'assets/images/clients/Ventora-center.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
