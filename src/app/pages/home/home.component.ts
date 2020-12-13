import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  options: SwiperConfigInterface = {
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
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1500: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  };

  sliderImages = [
    'https://res.cloudinary.com/alynasser/image/upload/c_scale,w_85/v1607798321/Ventora_center-min_j5pjiy.png',
    'https://res.cloudinary.com/alynasser/image/upload/c_scale,w_100/v1607798320/Jicdal-min_xczmvx.png',
    'https://res.cloudinary.com/alynasser/image/upload/c_scale,w_100/v1607798321/THE_ROOFS-min_wbkpqs.png',
    'https://res.cloudinary.com/alynasser/image/upload/c_scale,w_100/v1607798320/ddksa-min_bvvlhd.png',
  ];

  images = [
    'assets/images/clients/al saif home-min.png',
    'assets/images/clients/al waha gate-min.png',
    'assets/images/clients/Al waha waves-min.png',
    'assets/images/clients/alsaif elec-min.png',
    'assets/images/clients/Alsalman-min.png',
    'assets/images/clients/as-min.png',
    'assets/images/clients/Awaaed-min.png',
    'assets/images/clients/business center-min.png',
    'assets/images/clients/ddksa-min.png',
    'assets/images/clients/green apple-min.png',
    'assets/images/clients/hyaza-min.png',
    'assets/images/clients/Jicdal-min.png',
    'assets/images/clients/khayam-min.png',
    'assets/images/clients/shake shack-min.png',
    'assets/images/clients/Takamol-min.png',
    'assets/images/clients/THE ROOFS 2-min.png',
    'assets/images/clients/the roofs villa-min.png',
    'assets/images/clients/THE ROOFS-min.png',
    'assets/images/clients/Ventora center-min.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
