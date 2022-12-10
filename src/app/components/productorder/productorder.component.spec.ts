import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorderComponent } from './productorder.component';

describe('ProductorderComponent', () => {
  let component: ProductorderComponent;
  let fixture: ComponentFixture<ProductorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
