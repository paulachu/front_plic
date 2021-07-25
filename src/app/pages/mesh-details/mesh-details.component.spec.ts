import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeshDetailsComponent } from './mesh-details.component';

describe('MeshDetailsComponent', () => {
  let component: MeshDetailsComponent;
  let fixture: ComponentFixture<MeshDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeshDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeshDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
