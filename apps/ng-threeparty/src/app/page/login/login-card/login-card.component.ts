import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SignInComponent } from "../sign-in/sign-in.component";

@Component({
  selector: 'app-login-card',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SignInComponent
],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginCardComponent {

  loginWithGoogle(): void {
    console.warn('loginWithGoogle ==> ');
  }
}
