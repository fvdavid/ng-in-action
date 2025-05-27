# Applications in this project

Applications:

- [1. ng-threeparty](#ng-threeparty)
- [2. ng-ngrx-signal](#ng-ngrx-signal)
- [3. fv-fire](#fv-fire)
- [4. fv-supabase](#fv-supabase)

## 1. ng-threeparty

Mission: Trying to clone Airbnb

- [readme](https://github.com/fvdavid/ng-in-action/blob/main/apps/ng-threeparty/readme.md)
- [demo](https://fv-demos.web.app)

Technology stack:

- Angular 19
- Nx 20
- Material UI
- Tailwind CSS
- Firebase
  - Auth
  - Firestore
  - Hosting
- [@auth0](https://auth0.com/)
- [Mapbox](https://www.mapbox.com/) => https://fv-demos.web.app/s/place
- [ngx-typed-writer](https://www.npmjs.com/package/ngx-typed-writer) => https://fv-demos.web.app/auth/login

Run Locally:

```sh
pnpm nx serve ng-threeparty
```

Build:

```sh
pnpm nx build ng-threeparty
```

## 2. ng-ngrx-signal

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/yKoT4aV8Oe0/0.jpg)](https://youtu.be/yKoT4aV8Oe0)

Mission: Implement Ngrx/Signal with the CRUD Todo

- [readme](https://github.com/fvdavid/ng-in-action/blob/main/apps/ng-ngrx-signal/readme.md)

Technology stack:

- Angular 19
- Nx 20
- [@ngrx/signals](https://ngrx.io/)
  - @ngrx/operators
  - @ngrx/store-devtools

Run Locally:

```sh
pnpm nx serve ng-ngrx-signal
```

Build:

```sh
pnpm nx build ng-ngrx-signal
```

## 3. fv-fire

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/HgwRTWHLPvs/0.jpg)](https://youtu.be/HgwRTWHLPvs)

Mission: CRUD with Angular 19 + Firebase (Firestore)

<p align="center">
  <a href="https://angular.dev/">
    <img src="https://skillicons.dev/icons?i=angular"/>
  </a>
  <a href="https://firebase.google.com/">
    <img src="https://skillicons.dev/icons?i=firebase"/>
  </a>
</p>

- [readme](https://github.com/fvdavid/ng-in-action/blob/main/apps/fv-fire/readme.md)

Technology stack:

- Angular 19
- Nx 20
- [@angular/fire](https://www.npmjs.com/package/@angular/fire)
  - firestore

Run Locally:

```sh
pnpm nx serve fv-fire
```

Build:

```sh
pnpm nx build fv-fire
```

## 4. fv-supabase

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/fM3BQidurF4/0.jpg)](https://youtu.be/fM3BQidurF4)

Mission: Angular 19 Meets Supabase (CRUD)

<p align="center">
  <a href="https://angular.dev/">
    <img src="https://skillicons.dev/icons?i=angular"/>
  </a>
  <a href="https://supabase.com/">
    <img src="https://skillicons.dev/icons?i=supabase"/>
  </a>
</p>

- [readme](https://github.com/fvdavid/ng-in-action/blob/main/apps/fv-supabase/readme.md)

Technology stack:

- Angular 19
- Nx 20
- [Supabase](https://supabase.com)

Run Locally:

```sh
pnpm nx serve fv-supabase
```

Build:

```sh
pnpm nx build fv-supabase
```
