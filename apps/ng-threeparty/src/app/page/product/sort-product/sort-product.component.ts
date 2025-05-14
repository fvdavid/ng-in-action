import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sort-product',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './sort-product.component.html',
  styleUrl: './sort-product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortProductComponent {}
