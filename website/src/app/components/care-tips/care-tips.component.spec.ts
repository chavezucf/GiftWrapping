import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareTipsComponent } from './care-tips.component';

describe('CareTipsComponent', () => {
  let component: CareTipsComponent;
  let fixture: ComponentFixture<CareTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
