# Container (Smart) and Presentational (Dumb) Components

## Why

Imagine you build a component that deals with persistence layer and at the same time handles the UI state:

- Components built with many lines of code and responsibilities.
- Separation of concerns.

## Container Component

Container component can be think of it is like shipping containers:

- Contain all the state needed for presentational components in it is view.
- The template of a container component is made up entirely of presentational components and data bindings.
- Supply stream of observable data flow for presentational components.
- Connect to the presentational component with data bindings.
- Apply the `OnPush` change detection strategy.
- Deals with the the application state management (NgRx) and persistence layers (services) with dependency injection.
-

## Presentational Component

- Present application state to the user.
- Change application state triggered by user interaction.
- Have `@Input()` decorator for supplying them with data which will be formatted for display.
- Use `@Output()` decorator to notify application state changes initiated by user interactions.
- Apply the `OnPush` change detection strategy.
- Usually reusable.
- No side effects.

## Communication Between Container and Presentational Component

Container and presentational component communicate with each other via the `@Input()` and `@Output()` decorators in the presentational component.

Presentational component can have as many `@Input()` and `@Output()` decorators as it needs for different responsibility.

![Container Presentational Infographic](./images/container-presentational.png "Container Presentational Infographic")

## Naming

To have `.container` suffix instead of `.component` for container component.

```
heroes
|-heroes.component.ts
|-heroes.component.html
|-heroes.component.scss
|-heroes.container.ts
|-heroes.container.html
|-heroes.container.scss
```

## Hands On

### Prerequisite

1. `git clone https://github.com/hongtat88/angular-workshop.git`
2. Navigate into `smart-and-dumb-components\starter-kit` directory
3. `npm install`
4. `npm start`

> You could always find the final solution in `smart-and-dumb-components\final` directory.

### Extract a Container and Presentational Component out of a Mixed Component
1. First, generate a new container component:
```
ng generate component heroes/heroes --skip-tests --flat --type=container --dry-run
```