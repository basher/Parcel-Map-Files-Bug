# Example survey pages
- ES6 modules have to be run from a local web server to fix CORS errors.
- We'll use `http-server` for this.
- Edit file path for JavaScript in `index.html`:
```
<script defer type="module" src="index.js"></script>
```

## Generate DEV assets (e.g. JS) and run local web server
- `npm run localserver` to generate and copy up-to-date JavaScript.
- Assets are automatically copied from the `./public` folder and include non-minified JavaScript for debugging.

## Testing against production assets
- It is possible to test against the production (minified) versions by referencing `build/javascript/index.js`.
- At the present time JavaScript -> TypeScript mapping does not work correctly in the minified version
```
<script defer type="module" src="build/javascript/index.js"></script>
```
## Access local server
- Open http://127.0.0.1:8080 to see webpage.
