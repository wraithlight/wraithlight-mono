## @wraithlight/core.ui.base-components

### Classes:
* `wl-c-button-primary`
* `wl-c-button-secondary`
* `wl-c-button-tertiary`
* `wl-c-button-outline-primary`
* `wl-c-button-outline-secondary`
* `wl-c-button-outline-tertiary`
* `wl-c-button-function-success`
* `wl-c-button-function-warning`
* `wl-c-button-function-info`
* `wl-c-button-function-danger`
* `wl-c-input-standard`
* `wl-c-checkbox-primary`

### Usage

```js

// webpack.config.js
{
  loader: "sass-loader",
  options: {
    sassOptions: {
      includePaths: [resolve(__dirname, "node_modules")]
    }
  }
}

```

```scss

// styles.scss
@import "@wraithlight/core.ui.base-components/button-primary.css";
@import "@wraithlight/core.ui.{{appName}}.theme/theme-light.css";
@import "@wraithlight/core.ui.{{appName}}.theme/theme-dark.css";

```

### Components

#### Checkbox

```html

<label class="wl-c-checkbox-primary">
  <input type="checkbox" />
  <span></span>
  Click me to check!
</label>


```