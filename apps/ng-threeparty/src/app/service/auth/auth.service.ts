import { inject, Injectable } from '@angular/core';
import {
  Auth,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  user,
  User,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;

  firebaseAuth = inject(Auth);

  constructor() {
    this.setSessionStoragePersistence();
    this.user$ = user(this.firebaseAuth);
  }

  private setSessionStoragePersistence(): void {
    // setPersistence(this.firebaseAuth, browserSessionPersistence).then(() => {
    //   console.log('Session storage persistence set');
    // });

    this.firebaseAuth.setPersistence(browserSessionPersistence).then(() => {
      console.log('Session storage persistence set');
    });
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {
      console.log('Login successful');
    });

    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {
      sessionStorage.clear();
    });
    return from(promise);
  }

  register(email: string, password: string): Observable<void> {
    const newUser = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((userCredential) => {
      const user = userCredential.user;
      console.log('User registered:', user);
    });

    return from(newUser)
      .pipe
      // Handle the error here if needed
      // catchError((error) => {
      //   console.error('Registration error:', error);
      //   return of(null); // or throwError(error);
      // })
      ();
  }

  async googleLogin(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.firebaseAuth, provider);
      const user = result.user;

      if (!user) {
        throw new Error('Google-Login error');
      }
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  }

  async facebookLogin(): Promise<void> {
    const provider = new FacebookAuthProvider();
    provider.addScope('email');
    try {
      const result = await signInWithPopup(this.firebaseAuth, provider);
      const user = result.user;

      if (!user) {
        throw new Error('Facebook-Login error');
      }
    } catch (error) {
      console.error('Facebook login error:', error);
      throw error;
    }
  }

  async githubLogin(): Promise<void> {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(this.firebaseAuth, provider);
      const user = result.user;

      if (!user) {
        throw new Error('Facebook-Login error');
      }
    } catch (error) {
      console.error('Facebook login error:', error);
      throw error;
    }
  }

  async twitterLogin(): Promise<void> {
    const provider = new TwitterAuthProvider();
    try {
      const result = await signInWithPopup(this.firebaseAuth, provider);
      const user = result.user;

      if (!user) {
        throw new Error('Facebook-Login error');
      }
    } catch (error) {
      console.error('Facebook login error:', error);
      throw error;
    }
  }
}
