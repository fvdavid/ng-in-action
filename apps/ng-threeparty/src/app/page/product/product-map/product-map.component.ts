import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
} from '@angular/core';

import { MapComponent, MarkerComponent, PopupComponent } from 'ngx-mapbox-gl';
import { NgStyle } from '@angular/common';
import { Hotel } from '../../../model/hotel.model';

@Component({
  selector: 'app-product-map',
  imports: [MapComponent, MarkerComponent, NgStyle, PopupComponent],
  templateUrl: './product-map.component.html',
  styleUrl: './product-map.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductMapComponent {
  hotels = input<Hotel[]>([]);

  // onMapMove(event: any) {
  //   console.log('event ==> ', event);
  // }
}
