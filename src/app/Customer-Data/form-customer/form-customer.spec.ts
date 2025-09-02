import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomer } from './form-customer';

describe('FormCustomer', () => {
  let component: FormCustomer;
  let fixture: ComponentFixture<FormCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
