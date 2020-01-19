import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListViewComponent } from './form-list-view.component';

describe('FormListViewComponent', () => {
  let component: FormListViewComponent;
  let fixture: ComponentFixture<FormListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
