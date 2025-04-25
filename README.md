## File structure

```sh
./packages/apps
```
Contains backend or frontend projects

```sh
./packages/libs
```
Contains reusable libraries


## Run tasks

To build the library use:

```sh
npx nx build <project-name>
```

To run any task with Nx use:

```sh
npx nx <target> <project-name>
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)



## Generate a library

```sh
npx nx g @nx/js:lib packages/libs/<lib-name> --buildable --importPath=@zeta/<lib-name>
```