import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingplaneComponent } from './pricingplane.component';

describe('PricingplaneComponent', () => {
  let component: PricingplaneComponent;
  let fixture: ComponentFixture<PricingplaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingplaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
