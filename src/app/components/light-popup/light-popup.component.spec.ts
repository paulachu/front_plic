import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightPopupComponent } from './light-popup.component';

describe('LightPopupComponent', () => {
  let component: LightPopupComponent;
  let fixture: ComponentFixture<LightPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
