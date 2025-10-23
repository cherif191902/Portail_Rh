import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesRhComponent } from './statistiques-rh.component';

describe('StatistiquesRhComponent', () => {
  let component: StatistiquesRhComponent;
  let fixture: ComponentFixture<StatistiquesRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquesRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiquesRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



