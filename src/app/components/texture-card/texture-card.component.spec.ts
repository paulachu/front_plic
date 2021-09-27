import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextureCardComponent } from './texture-card.component';

describe('TextureCardComponent', () => {
  let component: TextureCardComponent;
  let fixture: ComponentFixture<TextureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextureCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
