import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsRhComponent } from './notifications-rh.component';

describe('NotificationsRhComponent', () => {
  let component: NotificationsRhComponent;
  let fixture: ComponentFixture<NotificationsRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



