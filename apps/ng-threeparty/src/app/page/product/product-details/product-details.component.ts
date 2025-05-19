import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CheckDateComponent } from '../check-date/check-date.component';
import { ProductCommentsComponent } from '../product-comments/product-comments.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SortProductComponent } from "../sort-product/sort-product.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [
    MatButtonModule,
    MatIconModule,
    CheckDateComponent,
    ProductCommentsComponent,
    MatToolbarModule,
    SortProductComponent,
    RouterLink
],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {}
