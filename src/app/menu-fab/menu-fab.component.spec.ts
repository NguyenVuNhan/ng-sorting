import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFabComponent } from './menu-fab.component';

describe('MenuFabComponent', () => {
  let component: MenuFabComponent;
  let fixture: ComponentFixture<MenuFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
