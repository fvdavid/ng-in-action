import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ProductMapComponent } from '../product-map/product-map.component';
import { ProductListMapComponent } from '../product-list-map/product-list-map.component';
import { Hotel } from '../../../model/hotel.model';

@Component({
  selector: 'app-product-place',
  imports: [ProductMapComponent, ProductListMapComponent],
  templateUrl: './product-place.component.html',
  styleUrl: './product-place.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPlaceComponent {
  initThePlaces: Hotel[] = [
    {
      id: 1,
      lng: 103.876357,
      lat: 1.31096,
      name: 'Ibis Singapore Emerald',
      price: 400,
      imgUrl:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1094647271173030623/original/8197468b-ed68-4437-869a-a1aa327c3828.jpeg?im_w=720',
      rating: 5,
      givenRating: 72,
      shortdescription: 'Smart Cabin with Toba Lake View | 2pax',
      tags: ['Lake Toba', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },
    {
      id: 2,
      lng: 103.87666,
      lat: 1.310885,
      name: 'Five Hotel',
      price: 320,
      imgUrl:
        'https://a0.muscache.com/im/pictures/miso/Hosting-839878227441241617/original/e35b9df2-bdb6-45b4-b746-cbbca329c3d6.jpeg?im_w=720',
      rating: 5,
      givenRating: 12,
      shortdescription: 'Built in 1980',
      tags: ['Mountain', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },
  ];

  filteredHotels = signal(this.initThePlaces);
}
