import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparmentListComponent } from './aparment-list.component';

describe('AparmentListComponent', () => {
  let component: AparmentListComponent;
  let fixture: ComponentFixture<AparmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AparmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AparmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
