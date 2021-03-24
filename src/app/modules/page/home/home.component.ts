import { Component } from '@angular/core';
import { TranslatorService } from 'src/app/core/services/translator/translator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public translatorService: TranslatorService) { }

  public useLanguage(lang: string) {
    this.translatorService.translator(lang);
  }

}
