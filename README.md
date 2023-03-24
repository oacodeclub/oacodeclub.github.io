# Welcome to the OA Code website!

## Setup (Github Codespace)
1. Go to https://github.com/oacodeclub/oacodeclub.github.io 
    - Code > Codespaces > Create codespace or dev
1. run in local environment: 
    - `npm start`
    - go to localhost:3000 (should open in your browser automatically)
1. push a production build to Github:
    - `npm run deploy`
    - this will push an optimized build to the main branch. If you want to share your code, do a regular commit/push to the dev branch (see [Git](#git-codespace-and-vs-code)).
1. production build at https://oacodeclub.github.io 

## Intro to React
- Everything you need is in ./src
    - ./src/Pages
        - one file per page
        - Write HTML inside the highest level div 
    - ./src/Assets
        - place to store image/media files
    - ./src/Components 
        - one file per component. (components are basically custom html tags)
- How to do css: use ./src/Components/Title.js and ./src/Components/Title.css as an example for how to do components and how to add css

## Git (Codespace and VS Code)
1. Open the Source Control tab (Ctrl + Shift + G)
1. Stage the changes you want to include in this commit (press the + button)
1. Write a commit message describing what you’ve changed
1. Do a commit and pull request

## Additional Resources
- [Git/Github Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf)
- [Quick Start – React](https://react.dev/learn)
