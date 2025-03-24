import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticComponent } from './exotic.component';

describe('ExoticComponent', () => {
  let component: ExoticComponent;
  let fixture: ComponentFixture<ExoticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExoticComponent]
    });
    fixture = TestBed.createComponent(ExoticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
