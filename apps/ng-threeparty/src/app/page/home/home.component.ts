import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { FilterProductComponent } from '../product/filter-product/filter-product.component';
import { SortProductComponent } from '../product/sort-product/sort-product.component';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    MatDividerModule,
    FilterProductComponent,
    SortProductComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
