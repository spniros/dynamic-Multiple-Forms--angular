import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormelementsetupComponent } from './formelementsetup.component';

describe('FormelementsetupComponent', () => {
  let component: FormelementsetupComponent;
  let fixture: ComponentFixture<FormelementsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormelementsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormelementsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
