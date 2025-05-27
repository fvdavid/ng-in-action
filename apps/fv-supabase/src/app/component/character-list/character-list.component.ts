import { MatDialog } from '@angular/material/dialog';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Character } from '../../model/character.model';
import { CharacterService } from '../../service/naruto-db/character.service';
import { CharacterActionsComponent } from '../character-actions/character-actions.component';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CharacterService],
})
export class CharacterListComponent implements OnInit {
  #characterService = inject(CharacterService);

  #dialog = inject(MatDialog);
  characterList = signal<Character[]>([]);

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  async loadAllCharacters() {
    const { data, error } = await this.#characterService.getAll();
    if (data) {
      this.characterList.set(data);
    }
  }

  actionCharacter(character?: Character) {
    if (character !== undefined) {
      const dialogRef = this.#dialog.open(CharacterActionsComponent, {
        data: {
          character: character,
          mode: 'Update',
        },
        width: '600px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.characterList.update((old) =>
          old.map((item) => (item.id === result.id ? result : item))
        );
      });
    } else {
      const dialogRef = this.#dialog.open(CharacterActionsComponent, {
        data: {
          mode: 'Add',
        },
        width: '600px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.characterList.update((old) => [...old, result]);
      });
    }
  }

  async deleteCharacter(id?: number) {
    const idCharacter = Number(id);

    console.log('idCharacter --> ', idCharacter);

    const { data, error } = await this.#characterService.delete(idCharacter);

    this.characterList.update((old) =>
      old.filter((item) => item.id !== idCharacter)
    );
    window.location.reload();
  }
}
