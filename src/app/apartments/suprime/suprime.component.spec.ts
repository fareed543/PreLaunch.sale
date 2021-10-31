import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprimeComponent } from './suprime.component';

describe('SuprimeComponent', () => {
  let component: SuprimeComponent;
  let fixture: ComponentFixture<SuprimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuprimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
