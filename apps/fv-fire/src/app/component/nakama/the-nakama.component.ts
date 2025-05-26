import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-the-nakama',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './the-nakama.component.html',
  styleUrl: './the-nakama.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheNakamaComponent {
  data = inject(MAT_DIALOG_DATA);

  #fb: FormBuilder = inject(FormBuilder);

  nakamaForm = this.#fb.nonNullable.group({
    name: ['', [Validators.required]],
    nickname: ['', [Validators.required]],
    devilFruit: ['', [Validators.required]],
    type: [''],
    model: [''],
    bounty: ['', [Validators.required]],
    originOfResidence: [''],
    equipment: [''],
    imgUrl: [''],
  });

  constructor() {
    if (this.data.mode === 'Update') {
      this.nakamaForm = this.#fb.nonNullable.group({
        name: [this.data.nakama.name, [Validators.required]],
        nickname: [this.data.nakama.nickname, [Validators.required]],
        devilFruit: [this.data.nakamadevilFruit, [Validators.required]],
        type: [this.data.nakama.type],
        model: [this.data.nakama.model],
        bounty: [this.data.nakama.bounty, [Validators.required]],
        originOfResidence: [this.data.nakama.originOfResidence],
        equipment: [this.data.nakama.equipment],
        imgUrl: [this.data.nakama.imgUrl],
      });
    }
  }

  onSubmit() {
    const rawForm = this.nakamaForm.getRawValue();
    console.log('rawForm ==> ', rawForm);
  }
}
