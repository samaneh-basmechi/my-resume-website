import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class TranslatorService {
  lang: string;

  constructor( public translateService: TranslateService) {}

  translator() {
    if (localStorage.getItem('language') === 'en'){
      this.lang = 'fa';
      this.translateService.use('fa');
      localStorage.setItem('language', 'fa');
    }else{
      this.lang = 'en';
      this.translateService.use('en');
      localStorage.setItem('language', 'en');
    }
    this.checkLang();
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
