import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auth0',
  imports: [MatButtonModule],
  templateUrl: './auth0.component.html',
  styleUrl: './auth0.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Auth0Component {
  authZero = inject(AuthService);

  onAuthSignIn(): void {
    this.authZero.loginWithRedirect();
  }

  // tutor
  // https://medium.com/@sehban.alam/how-to-implement-single-sign-on-sso-in-angular-7465a3960fb7
  // login() {
  //   this.auth.loginWithRedirect();
  // }

  // logout() {
  //   this.auth.logout();
  //   // .logout({ returnTo: window.location.origin })
  // }
}
