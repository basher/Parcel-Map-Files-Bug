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
