import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperpionComponent } from './superpion.component';

describe('SuperpionComponent', () => {
  let component: SuperpionComponent;
  let fixture: ComponentFixture<SuperpionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperpionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperpionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
