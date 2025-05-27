# Applications in this project

## ng-threeparty

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

## ng-ngrx-signal

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/yKoT4aV8Oe0/0.jpg)](https://youtu.be/yKoT4aV8Oe0)

Mission: Implement Ngrx/Signal with the CRUD Todo

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

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
