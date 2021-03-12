import { Component, OnInit, HostListener } from '@angular/core';
import { RootScopeService } from './core/services/root-scope/root-scope.service';
import { SeoService } from './core/services/seo/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Samaneh-Basmechi-Website';

  constructor(
    public rootScope: RootScopeService,
    public seo: SeoService) {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize($event) {
    this.rootScope.setViewType();
  }

}
