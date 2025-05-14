import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-product-by',
  imports: [CommonModule],
  templateUrl: './filter-product-by.component.html',
  styleUrl: './filter-product-by.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterProductByComponent {}
