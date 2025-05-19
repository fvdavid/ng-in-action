import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Hotel } from '../../../model/hotel.model';

@Component({
  selector: 'app-product-list-map',
  imports: [CommonModule],
  templateUrl: './product-list-map.component.html',
  styleUrl: './product-list-map.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListMapComponent {
  hotels = input<Hotel[]>([]);

  router = inject(Router);

  gotoProductsDetail(i: number) {
    this.router.navigateByUrl(`/product/${i}`);
  }
}
