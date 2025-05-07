import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-login-card',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginCardComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl(
        './../../../../assets/github-mark/github-mark-white.svg'
      )
    );
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit(): void {
    console.warn('warm ==> ', this.loginForm.valid);

    // TODO: Use EventEmitter with form value
    console.warn('loginForm ==> ', this.loginForm.value);
  }

  loginWithGoogle(): void {
    console.warn('loginWithGoogle ==> ');
  }
}
