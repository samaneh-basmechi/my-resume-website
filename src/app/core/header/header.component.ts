import { Component} from '@angular/core';
import {TranslatorService} from '../services/translator/translator';
import {Scroll} from '../../utilities/scroll';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent{
  scroll = new Scroll();
  constructor(public translatorService: TranslatorService) {}
}
