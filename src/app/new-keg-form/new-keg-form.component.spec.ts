import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKegFormComponent } from './new-keg-form.component';

describe('NewKegFormComponent', () => {
  let component: NewKegFormComponent;
  let fixture: ComponentFixture<NewKegFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKegFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
