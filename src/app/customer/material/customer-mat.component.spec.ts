import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMatComponent } from './customer-mat.component';

describe('CustomerMatComponent', () => {
  let component: CustomerMatComponent;
  let fixture: ComponentFixture<CustomerMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
