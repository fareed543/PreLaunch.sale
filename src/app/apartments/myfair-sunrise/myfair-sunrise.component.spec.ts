import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfairSunriseComponent } from './myfair-sunrise.component';

describe('MyfairSunriseComponent', () => {
  let component: MyfairSunriseComponent;
  let fixture: ComponentFixture<MyfairSunriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfairSunriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfairSunriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
