import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { FilterProductComponent } from "../product/filter-product/filter-product.component";

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, MatDividerModule, FilterProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
