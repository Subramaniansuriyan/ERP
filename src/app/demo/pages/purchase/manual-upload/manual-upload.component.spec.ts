import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualUploadComponent } from './manual-upload.component';

describe('BulkUploadComponent', () => {
  let component: ManualUploadComponent;
  let fixture: ComponentFixture<ManualUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
