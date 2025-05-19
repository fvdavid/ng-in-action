import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListMapComponent } from './product-list-map.component';

describe('ProductListMapComponent', () => {
  let component: ProductListMapComponent;
  let fixture: ComponentFixture<ProductListMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
