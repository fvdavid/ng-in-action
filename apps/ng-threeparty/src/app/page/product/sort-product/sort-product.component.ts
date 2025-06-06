import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { SearchModalComponent } from '../../../component/search-modal/search-modal.component';

@Component({
  selector: 'app-sort-product',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sort-product.component.html',
  styleUrl: './sort-product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})
export class SortProductComponent {
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  router = inject(Router);
  readonly dialog = inject(MatDialog);

  gotoSearchPlace() {
    this.router.navigateByUrl('/s/place');
  }

  openSearchDialog() {
    this.dialog.open(SearchModalComponent, {
      width: '70%',
    });
  }
}
