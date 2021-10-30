import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparmentsComponent } from './aparments.component';

describe('AparmentsComponent', () => {
  let component: AparmentsComponent;
  let fixture: ComponentFixture<AparmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AparmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AparmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
