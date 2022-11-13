import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsMainComponent } from './cards-main.component';

describe('CardsMainComponent', () => {
  let component: CardsMainComponent;
  let fixture: ComponentFixture<CardsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
