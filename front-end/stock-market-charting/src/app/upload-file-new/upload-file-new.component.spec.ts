import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileNewComponent } from './upload-file-new.component';

describe('UploadFileNewComponent', () => {
  let component: UploadFileNewComponent;
  let fixture: ComponentFixture<UploadFileNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
