import { MatDialog } from '@angular/material/dialog';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TheNakamaComponent } from '../../component/nakama/the-nakama.component';
import { Nakama } from '../../model/nakama.model';

@Component({
  selector: 'app-home',
  imports: [DecimalPipe, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  listofNakama: Nakama[] = [
    {
      name: 'Monkey D Luffy',
      nickname: 'Mugiwara',
      devilFruit: 'Human-Human Fruit',
      type: 'Paramecia',
      model: 'Nika',
      bounty: 3000000000,
      originOfResidence: 'East Blue',
      equipment: '-',
      imgUrl:
        'https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png',
    },
    {
      name: 'Roronoa Zoro',
      nickname: 'Zoro-juurou',
      devilFruit: 'none',
      type: '-',
      model: '-',
      bounty: 1100000000,
      originOfResidence: 'East Blue',
      equipment: 'Wadou Ichimonji, Sandai Kitetsu, Shuushui, dan Enma',
      imgUrl:
        'https://static.wikia.nocookie.net/onepiece/images/5/52/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png',
    },
    {
      name: 'Sanji',
      nickname: 'Sangoro',
      devilFruit: 'none',
      type: '-',
      model: '-',
      bounty: 1032000000,
      originOfResidence: 'Baratie',
      equipment: 'none',
      imgUrl:
        'https://static.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png',
    },
    {
      name: 'Usoppu',
      nickname: 'Sogeki',
      devilFruit: 'none',
      type: '-',
      model: '-',
      bounty: 500000000,
      originOfResidence: 'Desa Syrup',
      equipment: 'Slingshot',
      imgUrl:
        'https://static.wikia.nocookie.net/onepiece/images/3/35/Usopp_Anime_Post_Timeskip_Infobox.png',
    },
    {
      name: 'Nami',
      nickname: 'Namizo',
      devilFruit: 'none',
      type: '-',
      model: '-',
      bounty: 366000000,
      originOfResidence: 'East Blue (Pulau Conomi)',
      equipment: 'Stick',
      imgUrl:
        'https://static.wikia.nocookie.net/onepiece/images/6/68/Nami_Anime_Post_Timeskip_Infobox.png',
    },
    {
      name: 'Chopper',
      nickname: 'Chopa-emon',
      devilFruit: 'Hito Hito no Mi',
      type: 'Zoan',
      model: '-',
      bounty: 1000,
      originOfResidence: 'Grand Line (Pulau Drum)',
      equipment: '-',
      imgUrl:
        'https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png',
    },
    {
      name: 'Jinbe',
      nickname: '-',
      devilFruit: '-',
      type: '-',
      model: '-',
      bounty: 1100000000,
      originOfResidence: 'Grand Line (Kerajaan Ryugu, Pulau Manusia Ikan)',
      equipment: '-',
      imgUrl:
        'https://static.wikia.nocookie.net/onepiece/images/8/81/Jinbe_Anime_Infobox.png',
    },
    {
      name: 'Brook',
      nickname: 'Hanauta no Burukku',
      devilFruit: 'Yomi Yomi no Mi',
      type: 'Paramecia',
      model: '-',
      bounty: 383000000,
      originOfResidence: 'Florian Triangle',
      equipment: 'Shikomizue',
      imgUrl:
        'https://static.wikia.nocookie.net/onepiece/images/4/41/Brook_Anime_Post_Timeskip_Infobox.png',
    },
    {
      name: 'Franky',
      nickname: 'Cyborg',
      devilFruit: '-',
      type: '-',
      model: '-',
      bounty: 394000000,
      originOfResidence: 'Water 7',
      equipment: '-',
      imgUrl:
        'https://static.wikia.nocookie.net/onepiece/images/8/8c/Franky_Anime_Post_Timeskip_Infobox.png',
    },
    {
      name: 'Nico Robin',
      nickname: 'Miss All Sunday',
      devilFruit: 'Hana-Hana Fruit',
      type: 'Paramecia',
      model: '-',
      bounty: 930000000,
      originOfResidence: 'West Blue',
      equipment: '-',
      imgUrl:
        'https://static.wikia.nocookie.net/onepiece/images/b/bc/Nico_Robin_Anime_Post_Timeskip_Infobox.png',
    },
  ];

  isClick = signal(false);
  initNakama: Nakama = {};
  nakama = signal(this.initNakama);

  clicked(nakama: Nakama) {
    this.isClick.set(true);
    this.nakama.set(nakama);
  }

  #dialog = inject(MatDialog);

  updateData(nakama?: Nakama) {
    if (nakama !== undefined) {
      this.#dialog.open(TheNakamaComponent, {
        data: {
          nakama: nakama,
          mode: 'Update',
        },
        width: '600px',
      });
    } else {
      this.#dialog.open(TheNakamaComponent, {
        data: {
          mode: 'Add',
        },
        width: '600px',
      });
    }
  }
}
