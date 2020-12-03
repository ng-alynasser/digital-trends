import { Component, OnInit } from '@angular/core';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faLinkedinIn,
  faGoogle,
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faEmail = faEnvelope;
  faWhatsapp = faWhatsapp;
  faMap = faMapMarkerAlt;
  faLinkedIn = faLinkedinIn;
  faGoogle = faGoogle;
  faFacebook = faFacebookF;
  faTwitter = faTwitter;

  ngOnInit(): void {}
}
