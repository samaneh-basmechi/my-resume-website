import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class TranslatorService {
  lang: string;

  constructor( public translateService: TranslateService) {}

  translator(lang) {
  if (lang !== this.lang){
      this.lang = lang;
      this.translateService.use(lang);
      localStorage.setItem('language', lang);
      this.checkLang();
    }
  }

  async setDefualtLang(){
    this.lang = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(this.lang);
    this.translateService.use(this.lang);
    this.checkLang();
  }

  checkLang(){
    if (this.lang === 'fa'){
      document.getElementById('body').classList.replace('text-left' , 'text-right');
    }else {
      document.getElementById('body').classList.replace('text-right' , 'text-left');
    }
  }
}