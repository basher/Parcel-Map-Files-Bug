# Minimal repo to demo issues with debugging JavaScript using Parcel's compiled MAP files

## Run Parcel bundler
> NOTE: Use the correct Node version as listed in `.nvmrc`. If necessary, install Node Version Manager (NVM).

- `npm start` - installs Node modules (if not already installed), launches Parcel bundler to compile/watch files.
- `npm run build` - compiles and minifies files, for production use.

> NOTES:
> - Build folder is defined in `package.json` using the `--dist-dir` argument in the `build:parcel` NPM script.
> - Build folder path is also referenced by the `prodDirectoryPath` variable in the `./scripts/static-assets-move.js` NPM script.


## Testing MAP files in a test webpage
See `/_example-pages/README.md`.

## Storybook
> The `<script>` tag in `.storybook/preview-head.html` use placeholders, which reference environment variables defined in `.env` files.

```
<script defer src="%STORYBOOK_JS_PATH%"></script>
```

This is resolved as follows:

### `.env.development`
```
STORYBOOK_JS_PATH=index.js
```

### `.env.production`
```
STORYBOOK_JS_PATH=build/javascript/index.js
```

### Build and publish Storybook locally
- `npm run publish-storybook` - builds all Storybook dependencies, and copies output to `storybook-static` directory.
- `npx http-server ./storybook-static` - test Storybook production build on local server.
