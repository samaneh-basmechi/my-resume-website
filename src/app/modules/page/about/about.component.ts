import { Component } from '@angular/core';
import {Scroll} from '../../../utilities/scroll';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.scss']
})

export class AboutComponent {
  scroll = new Scroll();
}
