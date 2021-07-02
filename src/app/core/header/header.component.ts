import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslatorService} from '../services/translator/translator';

type htmlIdType = 'home'|'about'|'experience'|'skill'|'contact' ;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent{
  public activeLinkName: htmlIdType = 'home';

  constructor(public translatorService: TranslatorService) {}

  public scroll(htmlId: htmlIdType): void{
    if (htmlId === 'home'){
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }else{
      const element = document.getElementById(htmlId);
      element.scrollIntoView({behavior: 'smooth'});
    }
    this.activeLinkName = htmlId;
  }
}
