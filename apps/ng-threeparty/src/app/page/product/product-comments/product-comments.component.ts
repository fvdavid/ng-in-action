import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-comments',
  imports: [MatIconModule],
  templateUrl: './product-comments.component.html',
  styleUrl: './product-comments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCommentsComponent {}
