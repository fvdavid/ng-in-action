## ng-threeparty

Build with
- Angular 19
- Nx 20
- Tailwindcss
- Material UI

add material:
> pnpm npx nx g @angular/material:ng-add --project=ng-threeparty

add tailwindcss:
> pnpm npx nx g @nx/angular:setup-tailwind ng-threeparty


### Firebase

    [ ] Firestore
    [ ] Hosting
    [ ] Storage
    [ ] Authehtication

### Twillio

[ ] Whatsapp
[ ] Email


### Task

> Login page

pnpm nx g @nx/angular:component --path=apps/ng-threeparty/src/app/page/login/login --changeDetection=OnPush

pnpm nx g @nx/angular:component --path=apps/ng-threeparty/src/app/page/home/home --changeDetection=OnPush

pnpm nx g @nx/angular:service --path=apps/ng-threeparty/src/app/service/auth

## Util Libraries

- ngx-typed-writer
  https://www.npmjs.com/package/ngx-typed-writer
  pnpm add ngx-typed-writer

  > change to this: https://www.npmjs.com/package/typewriter-effect


- angular/fire
  install        => pnpm add @angular/fire firebase
  add to project => pnpm nx g @angular/fire:ng-add --project=ng-threeparty

  firebase browser session (browserSessionPersistence)


### Next Mission

  > https://www.youtube.com/watch?v=5NSH8VvJH5o
