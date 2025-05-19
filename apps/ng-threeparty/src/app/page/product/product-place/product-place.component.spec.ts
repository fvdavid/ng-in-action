import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPlaceComponent } from './product-place.component';

describe('ProductPlaceComponent', () => {
  let component: ProductPlaceComponent;
  let fixture: ComponentFixture<ProductPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPlaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
