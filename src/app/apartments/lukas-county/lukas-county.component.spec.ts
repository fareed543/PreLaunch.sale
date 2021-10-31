import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LukasCountyComponent } from './lukas-county.component';

describe('LukasCountyComponent', () => {
  let component: LukasCountyComponent;
  let fixture: ComponentFixture<LukasCountyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LukasCountyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LukasCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
