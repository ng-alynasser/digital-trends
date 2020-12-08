import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  private images = [
    'https://res.cloudinary.com/alynasser/image/upload/v1607321209/1_crdbdh.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607321269/2_j5phor.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607321358/3_uppyfb.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607320911/4_bnqn5r.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607321548/5_si6u4c.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607321608/6_vgvspe.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607321684/7_bs1xve.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607321759/8_lfbj1h.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607321840/9_dhmrny.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607322142/10_ae8dnv.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607322024/11_xv8kh2.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607322304/12_kmpjg1.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607322362/13_zrwh99.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607322449/14_cykr2x.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607322515/15_utkd4j.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607322647/16_dqlenf.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607374359/17_dtak5b.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607374413/18_ywl7hs.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607374210/19_r3khk3.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607374570/20_hufyky.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607374642/21_tsklkk.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607374725/22_yl8jxa.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607374961/23_lguiig.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607375037/24_tjsouo.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607375109/25_diifjn.jpg',
    'https://res.cloudinary.com/alynasser/image/upload/v1607375161/26_anpzqc.jpg',
  ];

  private albums = [];

  constructor(private lightbox: Lightbox) {}

  ngOnInit(): void {
    this.images.forEach((image) => {
      this.albums.push({
        src: image,
        caption: null,
        thumb: null,
      });
    });
  }

  open(index: number): void {
    this.lightbox.open(this.albums, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
