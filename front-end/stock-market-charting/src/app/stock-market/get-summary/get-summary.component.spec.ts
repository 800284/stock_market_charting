import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSummaryComponent } from './get-summary.component';

describe('GetSummaryComponent', () => {
  let component: GetSummaryComponent;
  let fixture: ComponentFixture<GetSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
