import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacepageComponent } from './placepage.component';

describe('PlacepageComponent', () => {
  let component: PlacepageComponent;
  let fixture: ComponentFixture<PlacepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
