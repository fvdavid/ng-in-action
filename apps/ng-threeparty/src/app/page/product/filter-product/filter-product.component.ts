import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-filter-product',
  imports: [CommonModule, MatTabsModule],
  templateUrl: './filter-product.component.html',
  styleUrl: './filter-product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterProductComponent {
  filterBy = [
    {
      name: 'Rooms',
      iconUrl:
        'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg',
      value: 'rooms',
    },
    {
      name: 'Tiny Homes',
      iconUrl:
        'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg',
      value: 'tiny-homes',
    },
    {
      name: 'Cabins',
      iconUrl:
        'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
      value: 'cabins',
    },
    {
      name: 'Lake Front',
      iconUrl:
        'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg',
      value: 'lake-front',
    },
  ];
}
