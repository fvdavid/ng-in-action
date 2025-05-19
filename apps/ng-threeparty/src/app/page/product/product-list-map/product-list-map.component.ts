import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hotel } from '../product-place/product-place.component';

@Component({
  selector: 'app-product-list-map',
  imports: [CommonModule],
  templateUrl: './product-list-map.component.html',
  styleUrl: './product-list-map.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListMapComponent {
  hotels = input<Hotel[]>([]);
}
