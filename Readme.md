# React Native Starter Kit

## Summary

A React Native template project with the objective to standardize development and to optimize the delivery time.

## Objective

This project is under construction and it has the propose to give an entrypoint for development, but not a complete solution.
The React Native Starter Kit project is intended to help address three common concerns:
	- Components Structure
	- Navigation and Routing
	- Flux, Store and State Control

## Main packages versions

| Package                                                                                 | Version  |
|-----------------------------------------------------------------------------------------|----------|
| [React Native](https://github.com/facebook/react-native)                                | 61.2     |
| [React Native Elements](https://react-native-training.github.io/react-native-elements/) | ^1.2.6   |
| [React Navigation](https://github.com/react-navigation/react-navigation)                | ^4.0.10  |
| [i18n-js](https://github.com/fnando/i18n-js)                                            | ^3.3.0   |
| [Redux](http://redux.js.org)                                                            | ^4.0.4   |
| [Redux Redux](https://github.com/reduxjs/react-redux)                                   | ^7.1.1   |
| [Redux-Thunk](http://redux.js.org)                                                      | ^2.3.0   |

## Getting Started

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://innersource.accenture.com/scm/adba/react-native-starter-kit.git

# Install dependencies
yarn
```

#### 2. Open RN in your iOS simulator

Run this command to start the development server and to start your app on iOS simulator:
```
yarn run ios
```

Or, if you prefer Android:
```
yarn run android
```

That's it!
Cool, right?

## Roadmap and Task List

- [ ] UI Components
    - [x] [Atomic Design Folder Structure](http://atomicdesign.bradfrost.com/chapter-1/)
    - [x] SignIn Screen and Templates
	- [x] Settings Screen and Templates
	- [x] Profile Screen and Templates
	- [x] Feed Screen and Templates
	- [ ] Other Components and Screens
	- [x] Theming
	- [ ] Add Lazy Loading
- [x] Navigation Flow / Routing
    - [x] Setup React Navigation
    - [x] Setup Stack Structure
	- [x] Setup Router
- [x] i18n / l10n
- [x] Business Rules
	- [x] Setup Redux
	- [x] Setup Store Folder Structure
	- [x] Redux example - Home Screen
- [x] Controller
	- [x] Setup Fetch Abstraction
- [ ] CI / CD
	- [ ] Setup Fastlane Android
	- [ ] Setup Fastlane iOS
	- [ ] Add CI/CD to Starter Kit
- [ ] Commons
	- [ ] NPM Package - Components and Templates
	- [ ] NPM Package - Integration and Logs
	- [ ] NPM Package - Analytics
- [ ] Web
	- [ ] Setup React Native Web
	- [ ] Setup NextJS
- [ ] Tests
	- [ ] Unit Test Samples
- [ ] Integration
	- [ ] Create Mocks for Rest APIs
- [ ] Architecture
	- [X] Cocoapods by default
	- [X] Autolink
	- [X] Hermes
	- [X] FastRefresh

## Documentation

Our documentation is under construction and you can contribute submiting a PR or [contacting us](mailto:julio.kenji.bando@accenture.com).

## Contributing

If you find any problems, please [contact us](mailto:julio.kenji.bando@accenture.com) or [submit a fix as a pull request](https://innersource.accenture.com/projects/ADBA/repos/react-native-starter-kit/pull-requests?create).

## Related Projects:

[React Native Android Cartridge - Docker](https://innersource.accenture.com/projects/ADBA/repos/android-worker/browse)
[DevOps Generic Environment - Docker Compose](https://innersource.accenture.com/projects/ADBA/repos/devops-compose/browse)
[ELK Generic Environment - Docker Compose](https://innersource.accenture.com/projects/ADBA/repos/elk/browse)
[Jenkins Worker Starter - Dockerfile](https://innersource.accenture.com/projects/ADBA/repos/jenkins-pre-slave/browse)