import { Injectable } from '@angular/core';

class MenuItem {
  title = '';
  link = '';
}

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  faItems: Array<MenuItem> = [
    { title: 'خانه', link: '/' },
    { title: 'درباره من', link: '/about' },
    { title: 'پروژه‌ها', link: '/projects' },
    { title: 'تماس با من', link: '/contact' }
  ];
  enItems: Array<MenuItem> = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Projects', link: '/projects' },
    { title: 'Contact', link: '/contact' }
  ];
  items = [];
  constructor() {
    this.checkingLang();
  }

  checkingLang() {
    if (localStorage.getItem('lang') === 'en') {
      this.items = this.enItems;
    }
    else {
      this.items = this.faItems;
    }
  }
}
