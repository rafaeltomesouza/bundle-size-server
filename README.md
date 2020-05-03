## Bundle size server

The idea of the "Bundle size server" is simulate a service to collect the size of the specific library in the npm repository.

It was implemented two apis:

```
/install - install the library in the plugin_packages folder to be analyzed.
/size - collect information related to the module size, minifiy and gzip information.
```

## Requirements to visualize the portal

Browser: Chrome (latest version) / Firefox (lastest version).


## Technologies used to developed the Bundle size - client

Browser: Chrome (latest version)
OS: MacOS Mojave
IDE: Visual Studio Code
Language: JavaScript/React


## Important highlight

It was created a server that returns the module size! The minified and gzip size, it was not implemented. <br>
It was added a random number related to that two itens and the implementation of this two points it was not finished.<br>
I spent more time to expected to understand how I can extract those information and then I realize that it was necessary execute the webpack application to obtain those values. I implemented the minify.js file, but I didn't add in the APi created.


## Instructions

Before start the application, you need to install all the libraries in the root server. To do that you need to type:

yarn or npm install

### `yarn start`

Runs the server in the development mode.<br />
The server will be enable in the following address [http://localhost:7001](http://localhost:7001).


## Project structure
```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── actions
│   │   └── status.tsx
│   ├── api
│   │   ├── bundle-server.tsx
│   │   ├── index.tsx
│   │   └── npmjs.tsx
│   ├── assets
│   │   ├── fonts
│   │   │   ├── NotoSansJP-Bold.otf
│   │   │   ├── NotoSansJP-Light.otf
│   │   │   ├── NotoSansJP-Regular.otf
│   │   │   └── NotoSansJP-Thin.otf
│   │   └── images
│   │       ├── notfound.gif
│   │       ├── processing.png
│   │       ├── search.gif
│   │       └── search.svg
│   ├── components
│   │   ├── Loading
│   │   │   ├── Loading.tsx
│   │   │   ├── index.tsx
│   │   │   └── styles
│   │   │       └── Loading.module.scss
│   │   └── Search
│   │       ├── Search.tsx
│   │       ├── hooks
│   │       │   └── index.js
│   │       ├── index.tsx
│   │       └── styles
│   │           └── Search.module.scss
│   ├── index.tsx
│   ├── pages
│   │   └── Home
│   │       ├── HomeContainer.tsx
│   │       ├── components
│   │       │   ├── Home.tsx
│   │       │   ├── Library.tsx
│   │       │   └── Statics.tsx
│   │       ├── hooks
│   │       │   ├── useHome.tsx
│   │       │   └── useLibrary.tsx
│   │       ├── index.tsx
│   │       └── styles
│   │           ├── Home.module.scss
│   │           └── Library.module.scss
│   ├── react-app-env.d.ts
│   ├── reducers
│   │   └── status.tsx
│   ├── setupTests.ts
│   ├── store.ts
│   ├── styles
│   │   ├── core
│   │   │   └── vars.scss
│   │   ├── fonts.scss
│   │   └── global.scss
│   └── types.ts
├── tsconfig.json
└── yarn.lock
```

### Contact
email: rafaeltomesouza@gmail.com
