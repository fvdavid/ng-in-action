import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SignInComponent } from '../sign-in/sign-in.component';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  imports: [CommonModule, MatButtonModule, MatIconModule, SignInComponent],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginCardComponent {
  authService = inject(AuthService);
  router = inject(Router);

  async onGoogleSignIn(): Promise<void> {
    console.warn('loginWithGoogle ==> ');

    try {
      await this.authService.googleLogin();
      console.log('Google sign-in successful');

      this.router.navigateByUrl('/home');
    } catch (error) {
      console.error('Google sign-in error:', error);
      // Handle the error here if needed
      // For example, show an error message to the user
    }
  }

  async onFacebookSignIn(): Promise<void> {
    console.warn('loginWithFacebook ==> ');

    try {
      await this.authService.facebookLogin();
      console.log('Facebook sign-in successful');

      this.router.navigateByUrl('/home');
    } catch (error) {
      console.error('Facebook sign-in error:', error);
      // Handle the error here if needed
      // For example, show an error message to the user
    }
  }

  async onGithubSignIn(): Promise<void> {
    console.warn('loginWithGithub ==> ');

    try {
      await this.authService.githubLogin();
      console.log('Github sign-in successful');

      this.router.navigateByUrl('/home');
    } catch (error) {
      console.error('Github sign-in error:', error);
      // Handle the error here if needed
      // For example, show an error message to the user
    }
  }

  async onTwitterSignIn(): Promise<void> {
    console.warn('loginWithTwitter ==> ');

    try {
      await this.authService.twitterLogin();
      console.log('Twitter sign-in successful');

      this.router.navigateByUrl('/home');
    } catch (error) {
      console.error('Twitter sign-in error:', error);
      // Handle the error here if needed
      // For example, show an error message to the user
    }
  }
}
