
# Welcome to the OA Code Website!

## Setup (Github Codespace)
1. Go to `https://github.com/oacodeclub/oacodeclub.github.io`, or alternatively, `https://github.com/LilGamerPlayz/oacodeclub.github.io` for the forked version.
    - Code > Codespaces > Create codespace or dev
2. Run in local environment: 
    - Run `npm start` or `node src` in the terminal
    - This will start a server, and give up a notification to open it. If you don't get a notification, go to Ports > Local Address and click on the link. Alternatively, turn it off with CTRL + C and rerun the command.
3. Push a production build to Github:
    - Run `npm run deploy` in the terminal
    - This will push an optimized build to the main branch. If you want to share your code, do a regular commit/push to the dev branch (see [Git](#git-codespace-and-vs-code)).
4. Production build at `https://oacodeclub.github.io`, forked version available at: `https://oacodeclubgithubio-production.up.railway.app/`


## Documentation/Intro to Website building/development
1. Everything you do to be shown to the user should be in public
    - `/public/index.html` is the main page
    - `/public/Assets` is where you put css, js, images and assets, etc.
    - `/public/index.html` is the homepage that is shown to the user
    - How to do a basic website: Files available in `/public/Assets/example` as an example for how to do a basic website, if running in local environment, go to `localhost:3000/Assets/example/eXample.html` to see the example.

2. Everything you do do that should be hidden from the user should be in `/src/index.js`
    - `/src/index.js` is the main file that is run, it is also where you start the server by doing node `src/index.js` or `node src`
    - HTML and CSS files should NOT be in `/src`, as it is not shown to the user.
    - `src/index.js` is only for server-side code written in NodeJS. Regular JavaScript functions should be done in `/public/Assets/js/yourfile.js`


## Git (Codespace and VS Code)
1. Open the Source Control tab (Ctrl + Shift + G)
1. Stage the changes you want to include in this commit (press the + button)
1. Write a commit message describing what you’ve changed
1. Do a commit and pull request

## Additional Resources
- [Git/Github Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf)
- [Quick Start – React](https://react.dev/learn)
