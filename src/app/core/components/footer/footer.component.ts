import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { ScrollService } from '../../services/scroll.service';
import { StateService } from '../../services/state.service';
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
  @ViewChild('name') nameInput: ElementRef;

  constructor(
    private readonly scrollService: ScrollService,
    private readonly stateService: StateService
  ) {}

  ngOnInit(): void {
    this.stateService
      .select((state) => state.triggerScrollToContactUs)
      .subscribe((trigger) => {
        if (trigger) {
          this.scrollToContactUs();
          this.stateService.setState('triggerScrollToContactUs', false);
        }
      });
  }

  scrollToContactUs(): void {
    this.scrollService.triggerScrollToContactUs();
    this.nameInput.nativeElement.focus();
  }
}
