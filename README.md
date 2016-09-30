# Webpack4MPA v0.0.2

Starter-kit for building MPA or static site with Metalsmith and Webpack:

* **Metalsmith** for compiling ".html" files
* **Webpack** for compiling ".js", ".css" and other static assets
* **Webpack-dev-derver** for [http://localhost:3000](http://localhost:3000) and Hot Module Replacement
* js-syntax: **ES6** (babel transpiling)
* css-preprocessor: **SCSS**
* templates: **EJS**

## Install:

```bash
git clone https://github.com/Stas404/webpack4mpa.git
cd webpack4mpa
npm install
```

### Basic commands:

| Command:        | Description:                                             |
|:--------------- |:-------------------------------------------------------- |
| `npm start`     | Start dev-environment (dev-server, file-watching / HMR)  |
| `npm run build` | Production build without dev-tools                       |

### Separated commands:

| Command:                   | Description:                                     |
|:-------------------------- |:-------------------------------------------------|
| `npm run dev:metalsmith`   | Metalsmith: Development build with file-watching |
| `npm run build:metalsmith` | Metalsmith: Production build with minification   |
| `npm run dev:webpack`      | Webpack: Developmnet build with dev-tools        |
| `npm run build:webpack`    | Webpack: Production build                        |

### Tests `*coming soon`

| Command:                          | Description:                               |
|:--------------------------------- |:-------------------------------------------|
| `npm test`                        | Start e2e-tests with nightwatch (**soon**) |
| `npm run install:selenium-server` | Download Selenium-server (jre needed)      |
| `npm install:chrome-driver`       | Download chrome-driver (into ".bin")       |

## Project structure
```
.
├── [npm_scripts]               Environment scripts (build, dev)
│   ├── install
│   ├── metalsmith
│   └── webpack
├── [src]                       Main sources directory
│   ├── [assets]                Static assets (will be copied into "/build" as is)
│   ├── [globals]               Global things (variables, config, common html-snippets, etc.)
│   │   ├── [blocks]            Common html-snippets (menu, tabs, hcard, etc.)
│   │   ├── [scss]              vars.scss, reset.scss, base.scss
│   │   └── siteConfig.js       main site-config (menu items, some global vars)
│   ├── layouts                 Main layouts folder (each layout = html-file + directory with the same name)
│   │   ├── [index]             Layout directory with partials
│   │   │   ├── [header]        Header-partials
│   │   │   ├── [main]
│   │   │   └── [footer]
│   │   ├── [login]
│   │   ├── index.html          Layout html-file
│   │   └── login.html
│   └── [pages]                 md-files for generating output html-files (set your own directories structure)
│       ├── [account]
│       │   ├── register.md
│       │   └── restore.md
│       ├── index.md
│       ├── about.md
│       ├── contact.html
│       └── account.md
├── README.md
├── package.json                dependencies + some configs
└── todo.md                      

```