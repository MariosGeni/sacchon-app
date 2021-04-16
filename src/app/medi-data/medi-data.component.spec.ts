import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediDataComponent } from './medi-data.component';

describe('MediDataComponent', () => {
  let component: MediDataComponent;
  let fixture: ComponentFixture<MediDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
