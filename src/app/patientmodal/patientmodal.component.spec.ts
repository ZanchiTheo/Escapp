import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientModalComponent } from './patientmodal.component';

describe('PatientmodalComponent', () => {
  let component: PatientModalComponent;
  let fixture: ComponentFixture<PatientModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
