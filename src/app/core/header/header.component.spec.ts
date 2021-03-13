import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should title available' , ()=>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toBe('Samaneh Basmechi');
  });

  it('should description available' , ()=>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.description').textContent).toBe('Front-End Developer');
  });

  it('should menu be correct' , ()=>{
    const menu = fixture.debugElement.queryAll(By.css('.menu li'));
    const menuArray = [];
    const menuList = ["Home", "About", "Resume", "Works", "Contact"]
    for (const listItem of menu) {
      menuArray.push(listItem.nativeNode.outerText)
    }
    expect(menuArray).toEqual(menuList);
  });

});
