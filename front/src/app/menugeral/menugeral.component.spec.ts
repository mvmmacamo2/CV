import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugeralComponent } from './menugeral.component';

describe('MenugeralComponent', () => {
  let component: MenugeralComponent;
  let fixture: ComponentFixture<MenugeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
