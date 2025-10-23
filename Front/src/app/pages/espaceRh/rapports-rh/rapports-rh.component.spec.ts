import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportsRhComponent } from './rapports-rh.component';

describe('RapportsRhComponent', () => {
  let component: RapportsRhComponent;
  let fixture: ComponentFixture<RapportsRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportsRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportsRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



