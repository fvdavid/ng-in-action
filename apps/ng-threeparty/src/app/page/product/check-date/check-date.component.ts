import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-check-date',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './check-date.component.html',
  styleUrl: './check-date.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckDateComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.bookingForm = this.fb.group({
      checkIn: [today, Validators.required],
      checkOut: [tomorrow, Validators.required],
      guest: [1, [Validators.required, Validators.nullValidator]],
    });

    // Listen for check-in date changes to update check-out min date
    this.bookingForm.get('checkIn')?.valueChanges.subscribe(() => {
      this.updateCheckOutMinDate();
    });
  }

  updateCheckOutMinDate(): void {
    const checkInDate = this.bookingForm.get('checkIn')?.value;
    if (checkInDate) {
      // Set check-out date to null if it's before the new check-in date
      const checkOutDate = this.bookingForm.get('checkOut')?.value;
      if (checkOutDate && new Date(checkOutDate) < new Date(checkInDate)) {
        this.bookingForm.get('checkOut')?.setValue(null);
      }
    }
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      console.log('Form submitted:', this.bookingForm.value);
      // Here you would typically send the data to your backend
    } else {
      this.bookingForm.markAllAsTouched();
    }
  }

  clearDates(): void {
    this.bookingForm.reset();
  }
}
