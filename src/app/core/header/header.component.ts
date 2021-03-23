import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslatorService} from '../services/translator/translator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{
  activeLinkName = 'home';
  constructor(
    public translatorService: TranslatorService) {
  }

  scroll(htmlId: string){
    if (htmlId === 'home'){
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }else{
      const element = document.getElementById(htmlId);
      element.scrollIntoView({behavior: 'smooth'});
    }
    this.activeLinkName = htmlId;
  }
}
