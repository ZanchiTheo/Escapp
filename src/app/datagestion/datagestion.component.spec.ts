import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagestionComponent } from './datagestion.component';

describe('DatagestionComponent', () => {
  let component: DatagestionComponent;
  let fixture: ComponentFixture<DatagestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
