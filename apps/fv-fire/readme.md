
## Create a new Application inside Nx
create new application
> pnpm nx g @nx/angular:application --directory=fv-fire --name=fv-fire --addTailwind=true --e2eTestRunner=none --unitTestRunner=none

## Generate new Component
run this app:
> pnpm nx serve fv-fire

- Create a new Home component with PNPM

```sh
pnpm nx g @nx/angular:component --path=apps/fv-fire/src/app/page/home/home --changeDetection=OnPush
```

pnpm nx g @nx/angular:component --path=apps/fv-fire/src/app/component/nakama/the-nakama --changeDetection=OnPush

## Setup Firebase

  - pnpm add @angular/fire
  - pnpm npx nx g @angular/fire:ng-add --project=fv-fire
