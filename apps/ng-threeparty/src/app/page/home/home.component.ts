import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListProductComponent } from "../product/list-product/list-product.component";

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, ListProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
