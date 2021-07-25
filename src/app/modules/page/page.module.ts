import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page.component';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShareModule} from '../../share/share.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    SkillComponent,
    ContactComponent,
    PageComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PageRoutingModule,
    TranslateModule,
    ShareModule
  ]
})
export class PageModule { }
