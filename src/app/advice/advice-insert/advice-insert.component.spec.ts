import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceInsertComponent } from './advice-insert.component';

describe('AdviceInsertComponent', () => {
  let component: AdviceInsertComponent;
  let fixture: ComponentFixture<AdviceInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
