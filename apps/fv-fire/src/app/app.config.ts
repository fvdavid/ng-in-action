import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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
    provideFirestore(() => getFirestore()),
  ],
};
