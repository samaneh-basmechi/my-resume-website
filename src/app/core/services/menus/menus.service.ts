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
    { title: 'درباره من', link: '/' },
    { title: 'رزومه من', link: '/' },
    { title: 'پروژه‌ها', link: '/' },
    { title: 'تماس با من', link: '/' }
  ];
  enItems: Array<MenuItem> = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/' },
    { title: 'Resume', link: '/' },
    { title: 'Works', link: '/' },
    { title: 'Contact', link: '/' }
  ];
  items = [];
  constructor() {}
}
