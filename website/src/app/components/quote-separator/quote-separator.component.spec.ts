import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSeparatorComponent } from './quote-separator.component';

describe('QuoteSeparatorComponent', () => {
  let component: QuoteSeparatorComponent;
  let fixture: ComponentFixture<QuoteSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteSeparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
