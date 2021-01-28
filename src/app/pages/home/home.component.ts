import { Component, OnInit } from '@angular/core';
import { StateService } from '../../core/services/state.service';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sliderImages = [
    'https://res.cloudinary.com/alynasser/image/upload/c_scale,w_85/v1607798321/Ventora_center-min_j5pjiy.png',
    'https://res.cloudinary.com/alynasser/image/upload/c_scale,w_100/v1607798320/Jicdal-min_xczmvx.png',
    'https://res.cloudinary.com/alynasser/image/upload/c_scale,w_100/v1607798321/THE_ROOFS-min_wbkpqs.png',
    'https://res.cloudinary.com/alynasser/image/upload/c_scale,w_100/v1607798320/ddksa-min_bvvlhd.png',
  ];

  images = [
    'assets/images/clients/AhmedSaif.png',
    'assets/images/clients/Al saif elec.png',
    'assets/images/clients/AlSaifHome.png',
    'assets/images/clients/AlsalmanOptics.png',
    'assets/images/clients/alwahaGate.png',
    'assets/images/clients/Awaad.png',
    'assets/images/clients/BusinessCenter.png',
    'assets/images/clients/Dal Real estate.png',
    'assets/images/clients/DateAndMore.png',
    'assets/images/clients/DDKSA.png',
    'assets/images/clients/GreenApple.png',
    'assets/images/clients/Heyazah.png',
    'assets/images/clients/Khayam.png',
    'assets/images/clients/shake shack.png',
    'assets/images/clients/takamul.png',
    'assets/images/clients/theRoofs.png',
    'assets/images/clients/theRoofs2.png',
    'assets/images/clients/theRoofsVilla.png',
    'assets/images/clients/ventoraProject.png',
    'assets/images/clients/waha waves.png',
  ];

  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    dotsData: true,
    navSpeed: 700,
    autoplay: true,
    rtl: true,
    animateIn: 'animate__animated  animate__fadeIn animate__slower',
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 6,
      },
      1500: {
        items: 7,
      },
    },
  };

  constructor(private readonly stateService: StateService) {}

  ngOnInit(): void {
    AOS.init();
  }

  triggerScrollToContactUs(): void {
    this.stateService.setState('triggerScrollToContactUs', true);
  }
}
