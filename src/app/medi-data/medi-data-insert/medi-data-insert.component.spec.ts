import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediDataInsertComponent } from './medi-data-insert.component';

describe('MediDataInsertComponent', () => {
  let component: MediDataInsertComponent;
  let fixture: ComponentFixture<MediDataInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediDataInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediDataInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
