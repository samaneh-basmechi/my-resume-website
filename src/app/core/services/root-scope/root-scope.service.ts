import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootScopeService {

  //#region : Properties
  viewType = '';
  w = {
    width: 0,
    height: 0
  };
  fullLoader = true;
  //#endregion

  //#region : Constructor
  constructor() {
    this.setViewType();
  }
  //#endregion

  //#region : Set View Type
  setViewType() {
    const w = document.body.clientWidth;
    this.w.width = w;
    if (w < 768) {
      this.viewType = 'mobile';
    } else if (w < 992) {
      this.viewType = 'tablet';
    } else {
      this.viewType = 'desktop';
    }
  }
  //#endregion

}
