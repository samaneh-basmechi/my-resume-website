import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslatorService} from '../services/translator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{

  constructor(
    public translatorService: TranslatorService) {
  }

  useLanguage() {
    this.translatorService.translator();
  }
}
