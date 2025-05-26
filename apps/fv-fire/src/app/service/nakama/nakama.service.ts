import { Injectable } from '@angular/core';
import { FireStoreService } from '../fire-store/fire-store.service';
import { Nakama } from '../../model/nakama.model';

@Injectable()
export class NakamaService extends FireStoreService<Nakama> {
  constructor() {
    super('nakama');
  }
}
