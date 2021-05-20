import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpionComponent } from './surpion.component';

describe('SurpionComponent', () => {
  let component: SurpionComponent;
  let fixture: ComponentFixture<SurpionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurpionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
