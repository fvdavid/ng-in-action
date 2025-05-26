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
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NakamaService } from '../../service/nakama/nakama.service';
import { Nakama } from '../../model/nakama.model';

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
  providers: [NakamaService],
})
export class TheNakamaComponent {
  data = inject(MAT_DIALOG_DATA);

  #fb: FormBuilder = inject(FormBuilder);
  #nakamaService = inject(NakamaService);
  dialogRef = inject(MatDialogRef<TheNakamaComponent>);

  nakamaForm = this.#fb.nonNullable.group({
    name: ['', [Validators.required]],
    nickname: ['', [Validators.required]],
    devilFruit: ['', [Validators.required]],
    type: [''],
    model: [''],
    bounty: [0, [Validators.required]],
    originOfResidence: [''],
    equipment: [''],
    imgUrl: [''],
  });

  constructor() {
    if (this.data.mode === 'Update') {
      this.nakamaForm = this.#fb.nonNullable.group({
        name: [this.data.nakama.name, [Validators.required]],
        nickname: [this.data.nakama.nickname, [Validators.required]],
        devilFruit: [this.data.nakama.devilFruit, [Validators.required]],
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
    const rawForm: Nakama = this.nakamaForm.getRawValue();

    if (this.data.mode !== 'Update') {
      this.#nakamaService.add(rawForm);
    } else {
      rawForm.id = this.data.nakama.id;
      this.#nakamaService.update(rawForm);
      this.dialogRef.close(rawForm);
    }
  }
}
