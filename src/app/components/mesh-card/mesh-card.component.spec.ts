import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeshCardComponent } from './mesh-card.component';

describe('MeshCardComponent', () => {
  let component: MeshCardComponent;
  let fixture: ComponentFixture<MeshCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeshCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeshCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
