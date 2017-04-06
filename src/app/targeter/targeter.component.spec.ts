import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargeterComponent } from './targeter.component';

describe('TargeterComponent', () => {
  let component: TargeterComponent;
  let fixture: ComponentFixture<TargeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
