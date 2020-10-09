import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOutMagicComponent } from './about-out-magic.component';

describe('AboutOutMagicComponent', () => {
  let component: AboutOutMagicComponent;
  let fixture: ComponentFixture<AboutOutMagicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOutMagicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOutMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
