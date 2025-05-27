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
import { Character } from '../../model/character.model';
import { CharacterService } from '../../service/naruto-db/character.service';

@Component({
  selector: 'app-character-actions',
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
  templateUrl: './character-actions.component.html',
  styleUrl: './character-actions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CharacterService],
})
export class CharacterActionsComponent {
  data = inject(MAT_DIALOG_DATA);

  #fb: FormBuilder = inject(FormBuilder);
  dialogRef = inject(MatDialogRef<CharacterActionsComponent>);

  #characterService = inject(CharacterService);

  characterForm = this.#fb.nonNullable.group({
    name: ['', [Validators.required]],
    superpower: ['', [Validators.required]],
    basicelement: ['', [Validators.required]],
  });

  constructor() {
    if (this.data.mode === 'Update') {
      this.characterForm = this.#fb.nonNullable.group({
        name: [this.data.character.name, [Validators.required]],
        superpower: [this.data.character.superpower, [Validators.required]],
        basicelement: [this.data.character.basicelement, [Validators.required]],
      });
    }
  }

  onSubmit() {
    const rawForm: Character = this.characterForm.getRawValue();
    if (this.data.mode === 'Update') {

      this.#characterService.update(this.data.character.id, rawForm);
      rawForm.id = this.data.character.id;
      this.dialogRef.close(rawForm);

    } else {
      this.#characterService.create(rawForm);
      this.dialogRef.close(rawForm);
    }
  }
}
