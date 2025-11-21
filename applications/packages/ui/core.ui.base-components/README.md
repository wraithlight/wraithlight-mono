## @wraithlight/core.ui.base-components

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

@import "@wraithlight/core.ui.base-components/button-primary.css";
@import "@wraithlight/core.ui.{{appName}}.theme/theme-light.css";
@import "@wraithlight/core.ui.{{appName}}.theme/theme-dark.css";

```