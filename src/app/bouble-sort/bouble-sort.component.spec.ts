import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoubleSortComponent } from './bouble-sort.component';

describe('BoubleSortComponent', () => {
  let component: BoubleSortComponent;
  let fixture: ComponentFixture<BoubleSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoubleSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoubleSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
