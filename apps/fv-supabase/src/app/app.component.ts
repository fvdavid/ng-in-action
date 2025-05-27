import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterListComponent } from "./component/character-list/character-list.component";

@Component({
  imports: [RouterModule, CharacterListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fv-supabase';
}
