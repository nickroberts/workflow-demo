# Workflow Demo

## Setup

1. Install node & npm
2. Install supervisor globally: `npm install supervisor -g`
3. Install gulp globally: `npm install gulp -g`
4. Run `npm install`
5. Run `gulp serve`

## Gulp commands

* `gulp`
This compiles the sass into the css. More will be added later.
* `gulp watch`
This watches the sass folder, then when a file changes, it compiles the sass into the css. More will be added later.
* `gulp serve`
This compiles the sass to css, the starts the node server on port 8082. It watches for changes, and if a sass file changes, it compiles the css. If a node js file changes, it reloads the server.

## Routes

Right now, there are only 4 routes:

* `http://localhost:8082/` This will show the index view.
* `http://localhost:8082/hello/{name}` This will show the index view with Hello, {name}!
* `http://localhost:8082/red` This will show the index view with a red theme.
* `http://localhost:8082` This will show the index view with a blue theme.

The default theme is a slate gray.


Nothing special about this, just a little demo to start with.
