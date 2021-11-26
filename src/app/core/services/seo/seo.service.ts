import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

declare var $;

@Injectable({
  providedIn: 'root'
})

export class SeoService {

  constructor(private meta: Meta) {
  }

  private generateTags(config): void {
    let title = 'Samaneh Basmechi';
    if (config.title) {
      title = config.title + ' - ' + title;
    }
    config = {
      description: 'Samaneh Basmechi, Front-End developer',
      image: 'http://samanehbasmechi.ir/assets/img/cover.jpg',
      slug: '',
      content: 'Samaneh Basmechi',
      type: 'website',
      ...config,
      title
    };
    document.title = config.title;
    this.meta.updateTag({name: 'description', content: config.description});
    this.meta.updateTag({name: 'twitter:card', content: config.description});
    this.meta.updateTag({name: 'twitter:site', content: config.content});
    this.meta.updateTag({name: 'twitter:title', content: config.title});
    this.meta.updateTag({name: 'twitter:description', content: config.description});
    this.meta.updateTag({name: 'twitter:image', content: config.image});
    this.meta.updateTag({property: 'og:type', content: config.type});
    this.meta.updateTag({property: 'og:site_name', content: config.title});
    this.meta.updateTag({property: 'og:title', content: config.title});
    this.meta.updateTag({property: 'og:description', content: config.description});
    this.meta.updateTag({property: 'og:image', content: config.image});
    this.meta.updateTag({property: 'og:url', content: `http://www.samanehbasmechi.ir${config.slug}`});
    $('link[rel="canonical"]').attr('href', `http://www.samanehbasmechi.ir${config.slug}`);
  }

}
