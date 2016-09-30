---
title: Webpack4MPA
layout: index.html
---

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
