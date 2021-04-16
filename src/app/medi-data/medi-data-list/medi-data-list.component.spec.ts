import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediDataListComponent } from './medi-data-list.component';

describe('MediDataListComponent', () => {
  let component: MediDataListComponent;
  let fixture: ComponentFixture<MediDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediDataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
