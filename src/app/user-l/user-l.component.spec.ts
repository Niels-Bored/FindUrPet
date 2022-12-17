import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLComponent } from './user-l.component';

describe('UserLComponent', () => {
  let component: UserLComponent;
  let fixture: ComponentFixture<UserLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
