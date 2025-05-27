import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Naruto } from '../../model/naruto.model';
import { NarutoDbService } from '../../service/naruto-db/naruto-db.service';

@Component({
  selector: 'app-character-list',
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NarutoDbService]
})
export class CharacterListComponent implements OnInit {

  initCharacter: Naruto[] = [];
  characters = signal(this.initCharacter); //: Naruto[] = [];
  #narutoDbService = inject(NarutoDbService);

  ngOnInit(): void {
    // this.loadCharacters();
    console.log('data ==> ');
  }

  async loadCharacters() {
    const { data } = await this.#narutoDbService.getNarutoCharacters();
    if(data) {
      console.log('data ==> ', data);
      // this.characters = data;
      this.characters.set(data);
    }
    // else {
    //   error;
    // }
  }
}
