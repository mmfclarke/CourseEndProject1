import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeetingsComponent } from './admin-meetings.component';

describe('AdminMeetingsComponent', () => {
  let component: AdminMeetingsComponent;
  let fixture: ComponentFixture<AdminMeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMeetingsComponent]
    });
    fixture = TestBed.createComponent(AdminMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
