import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterProductByComponent } from './filter-product-by.component';

describe('FilterProductByComponent', () => {
  let component: FilterProductByComponent;
  let fixture: ComponentFixture<FilterProductByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterProductByComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterProductByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
