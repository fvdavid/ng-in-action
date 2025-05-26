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
import { NakamaService } from '../../service/nakama/nakama.service';
import { limit } from '@angular/fire/firestore';

import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [DecimalPipe, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NakamaService],
})
export class HomeComponent {
  #dialog = inject(MatDialog);
  #nakamaService = inject(NakamaService);

  isClick = signal(false);
  initNakama: Nakama = {};
  nakama = signal(this.initNakama);

  nakama$ = this.#nakamaService.getSnapshotChanges([limit(30)]);

  nakamas = toSignal(this.nakama$);

  clicked(nakama: Nakama) {
    this.isClick.set(true);
    this.nakama.set(nakama);
  }

  updateNakama(nakama?: Nakama) {
    if (nakama !== undefined) {
      const dialogRef = this.#dialog.open(TheNakamaComponent, {
        data: {
          nakama: nakama,
          mode: 'Update',
        },
        width: '600px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.nakama.set(result);
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

  deleteNakama(nakama: Nakama) {
    this.#nakamaService.delete(nakama);
    window.location.reload();
  }
}
