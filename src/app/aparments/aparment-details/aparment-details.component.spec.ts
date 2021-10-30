import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparmentDetailsComponent } from './aparment-details.component';

describe('AparmentDetailsComponent', () => {
  let component: AparmentDetailsComponent;
  let fixture: ComponentFixture<AparmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AparmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AparmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
