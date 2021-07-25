import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {
  message: string;

  constructor() {
  }

  show(message, type: 'ERROR' | 'SUCCESS'): void {
    this.message = message;
    const snackbar = document.getElementById('snackbar');
    this.setCssClass(snackbar, type);
    setTimeout(() => {
      snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
  }

  setCssClass(snackbar, type: 'ERROR' | 'SUCCESS'): void {
    switch (type) {
      case 'ERROR':
        snackbar.className = 'show error-message';
        break;
      case 'SUCCESS':
        snackbar.className = 'show success-message';
        break;
    }
  }

}
