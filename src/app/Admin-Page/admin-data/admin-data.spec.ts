import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminData } from './admin-data';

describe('AdminData', () => {
  let component: AdminData;
  let fixture: ComponentFixture<AdminData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
