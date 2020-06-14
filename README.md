<h1 align="center">
    <img alt="Ecoleta" title="#Ecoleta" src=".github/logoEcoleta.svg" width="250px" />
</h1>

<h4 align="center"> 
	:heavy_check_mark: EColeta - NLW#1 🚀 :heavy_check_mark:
</h4>
<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Valerianofilipec/Ecoleta">
	
  <a href="https://www.linkedin.com/in/valerianofilipec/">
    <img alt="Made by Valeriano Filipe Calológio" src="https://img.shields.io/badge/made%20by-ValerianoFilipe-%2304D361">
  </a>
  
  <a href="https://github.com/Valerianofilipec/Ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Valerianofilipec/Ecoleta">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/Valerianofilipec/Ecoleta/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Valerianofilipec/Ecoleta?style=social">
  </a>
</p>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>


## 💻 Project

Ecoleta is a project developed based on international environment week. 
That aims to connect people to companies that collect specific waste such as light bulbs, batteries, cooking oil, etc.

<h1 align="center">
    <img alt="Example" title="Example" src=".github/capa.svg" width="500px" />
</h1>


## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]
- [Figma][figma]

## 🔖 Layout

To access the layout use [Figma](https://www.figma.com/file/Zt0Dtvu1XcLqrcFD6FEQ0T/Ecoleta-Copy?node-id=136%3A546).

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn]/[Npm][npm] installed on your computer.

From your command line:

### Install API (SERVER)

```bash
# Clone this repository
$ git clone https://github.com/Valerianofilipec/Ecoleta

# Go into the repository
$ cd Ecoleta/server

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex:migrate

# Run Seeds
$ yarn knex:seed

# Start server
$ yarn run dev

# running on port 3333
```

### Install Frontend (WEB)

```bash
# Clone this repository
$ git clone https://github.com/Valerianofilipec/Ecoleta

# Go into the repository
$ cd Ecoleta/web

# Install dependencies
$ npm install

# Run
$ npm start

# running on port 3000
```

### Install Mobile

```bash
# Clone this repository
$ git clone https://github.com/Valerianofilipec/Ecoleta

# Go into the repository
$ cd Ecoleta/mobile

# Install dependencies
$ yarn install

# Run
$ yarn start

# Expo will open, just scan the qrcode on terminal or expo page

# If some problem with fonts, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

```

## 🤔 How to contribute

-  Make a fork;
-  Create a branch with your feature: `git checkout -b my-feature`;
-  Commit changes: `git commit -m 'feat: My new feature'`;
-  Make a push to your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/Valerianofilipec/Ecoleta/blob/master/LICENSE) for details.

Made with ♥ by Valeriano Filipe Calológio :wave: [Get in touch!](https://www.linkedin.com/in/valerianofilipec/)

[figma]: https://www.figma.com/
[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[npm]: https://www.npmjs.com/