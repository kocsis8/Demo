import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclockComponent } from './addclock.component';

describe('AddclockComponent', () => {
  let component: AddclockComponent;
  let fixture: ComponentFixture<AddclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddclockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
