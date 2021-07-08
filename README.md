# demo-server

- `npm install webpack webpack-cli --save-dev `
- Update npm script
- `npm install prettier eslint --save-dev`
- `npm install --save-dev eslint-config-prettier eslint-plugin-prettier`
  > The former turns off all ESLint rules that could conflict with Prettier, the latter integrates the Prettier rules into ESLint rules.
- Remove any extra formatters in Settings. Use the ones in .vscode/settings.json
- `npm install apollo-server graphql webpack-node-externals`.
- Update webpack with webpack-node-externals and set `target: "node"`. Otherwise the build fails

- Run with docker: `docker run -p 49160:4000 -d <containerId>`
