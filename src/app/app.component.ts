import { Component } from '@angular/core';
import {TranslatorService} from './core/services/translator/translator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor(public translatorService: TranslatorService) {
    this.translatorService.setDefualtLang();
  }

}
