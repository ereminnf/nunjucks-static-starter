# App

Starter project with nunjucks-static.

This project uses createConfig webpack to run quickly from nunjucks-static which supports:

-   typescript
-   prettier
-   sass/scss
-   local devServer
-   env loading
-   hashing static files, for example when using the img[src] tag
-   public folder, to serve static files without hashing (file path must start with /static)

You can write your own configuration using the readme from nunjucks-static.

## 🚀 Getting Started

Switch to the nodejs version to match the version in the nvmrc file.

Copy .env.example to .env file.

Make changes to .env and webpack.config.js as needed.

Run npm i to install dependencies.

Use command scripts from package.json to work with the project.

## 📝 Usage

Npm commands for working with a project:

```js
"scripts": {
    "start": "Running local host server",
    "watch": "Running a project in watch mode",
    "build": "Building the project in production mode",
    "prettier": "Format files with prettier"
}
```

## 📄 Info

-   nvmrc v16.15.1
-   webpack v5.74.0
