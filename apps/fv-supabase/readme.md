
## create new Application

pnpm nx g @nx/angular:application --directory=apps/fv-supabase --name=fv-supabase --addTailwind=true --e2eTestRunner=none --unitTestRunner=none

## Create new Service

pnpm nx g @nx/angular:service service/naruto-db/naruto-db --project=fv-supabase

## Create new Component

pnpm nx g @nx/angular:component --path=apps/fv-supabase/src/app/component/character-list/character-list --changeDetection=OnPush
