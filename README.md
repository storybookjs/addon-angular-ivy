# Storybook Addon Angular Ivy

This addon configures [Storybook for Angular](https://storybook.js.org/docs/angular/get-started/introduction) to use the [Angular Ivy compiler](https://angular.io/guide/ivy) instead of the just-in-time compiler that Storybook uses by default.

## Installation

This addon installs just like any other Storybook addon:

```sh
npm install --save-dev storybook-addon-angular-ivy
```

The add it to your `.storybook/main.js` addons field:

```js
module.exports = {
  addons: ["storybook-addon-angular-ivy"],
};
```

That's it! The first time you run it on a new project, the addon will run the angular compiler `ngcc` on your `node_modules` folder.
