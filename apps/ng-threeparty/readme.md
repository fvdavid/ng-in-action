## ng-threeparty

site: https://fv-demos.web.app

Build with

- Angular 19
- Nx 20
- Tailwindcss
- Material UI

add material:

```sh
pnpm npx nx g @angular/material:ng-add --project=ng-threeparty
```

add tailwindcss:

```sh
pnpm npx nx g @nx/angular:setup-tailwind ng-threeparty
```

### Firebase

    [ ] Firestore
    [x] Hosting
    [ ] Storage
    [x] Authehtication

### Twillio

[ ] Whatsapp
[ ] Email

### Task

Login

- Create a new Login component with PNPM

```sh
pnpm nx g @nx/angular:component --path=apps/ng-threeparty/src/app/page/login/login --changeDetection=OnPush
```

## Util Libraries

- ngx-typed-writer
  https://www.npmjs.com/package/ngx-typed-writer
  pnpm add ngx-typed-writer

- angular/fire
  install => pnpm add @angular/fire firebase
  add to project => pnpm nx g @angular/fire:ng-add --project=ng-threeparty

  firebase browser session (browserSessionPersistence)
