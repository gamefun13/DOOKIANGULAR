import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoweareComponent } from './whoweare.component';

describe('WhoweareComponent', () => {
  let component: WhoweareComponent;
  let fixture: ComponentFixture<WhoweareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoweareComponent]
    });
    fixture = TestBed.createComponent(WhoweareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
