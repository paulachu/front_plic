import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyboxCardComponent } from './skybox-card.component';

describe('SkyboxCardComponent', () => {
  let component: SkyboxCardComponent;
  let fixture: ComponentFixture<SkyboxCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyboxCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyboxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
