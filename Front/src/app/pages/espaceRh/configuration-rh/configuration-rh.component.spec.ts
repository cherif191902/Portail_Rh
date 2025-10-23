import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationRhComponent } from './configuration-rh.component';

describe('ConfigurationRhComponent', () => {
  let component: ConfigurationRhComponent;
  let fixture: ComponentFixture<ConfigurationRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



