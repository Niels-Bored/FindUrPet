import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLostComponent } from './single-lost.component';

describe('SingleLostComponent', () => {
  let component: SingleLostComponent;
  let fixture: ComponentFixture<SingleLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
