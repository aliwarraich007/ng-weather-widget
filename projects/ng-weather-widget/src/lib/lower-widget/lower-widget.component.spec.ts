import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerWidgetComponent } from './lower-widget.component';

describe('LowerWidgetComponent', () => {
  let component: LowerWidgetComponent;
  let fixture: ComponentFixture<LowerWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowerWidgetComponent]
    });
    fixture = TestBed.createComponent(LowerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
