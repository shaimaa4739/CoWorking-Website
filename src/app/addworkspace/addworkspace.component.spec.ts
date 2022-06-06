import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddworkspaceComponent } from './addworkspace.component';

describe('AddworkspaceComponent', () => {
  let component: AddworkspaceComponent;
  let fixture: ComponentFixture<AddworkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddworkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddworkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
