import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideMapboxGL } from 'ngx-mapbox-gl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fvupwork-9c8ab',
        appId: '1:470120656217:web:48f535cdbab482ea927048',
        storageBucket: 'fvupwork-9c8ab.firebasestorage.app',
        apiKey: 'AIzaSyAN89g6aLAN-vcbCSh5H4fZCuKgWvni8WU',
        authDomain: 'fvupwork-9c8ab.firebaseapp.com',
        messagingSenderId: '470120656217',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideHttpClient(),
    provideAuth0({
      domain: 'fvroot.au.auth0.com',
      clientId: 'Jkz43xhuaHDK3ebVxkBPMc3RbO3V9pxq',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),

    // provideMapboxGL({
    //   accessToken:
    //     'pk.eyJ1IjoiZnZkYXZpZCIsImEiOiJjbWFwdWFzZmYwMm05MmtvZW1yMTE4ODRxIn0.W3i4djgesk1cEDT8rOaejg',
    // }),

    provideMapboxGL({
      accessToken:
        'pk.eyJ1Ijoid3lra3NzIiwiYSI6ImNtOWVjamJvYzE0bnMya3NjMGtlYzB2cjUifQ.15RQ3pM0Tmw9hWgYMITbDw',
    }),
  ],
};
