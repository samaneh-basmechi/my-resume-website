import { Component, OnInit } from '@angular/core';
import {TranslatorService} from '../../core/services/translator/translator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public translatorService: TranslatorService) { }

  ngOnInit(): void {
  }

  useLanguage(lang: string) {
    this.translatorService.translator(lang);
  }

}
