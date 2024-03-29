# WA_Messages : Inter Platform Chatting webapp using Twilio API
A universal platform for inter platform chatting using Twilio API and React.JS frontend using Firebase database.

## Getting Started
1. [Frontend](#1-frontend)
2. [Backend](#2-backend)
## Stack Used
- React.Js
- Node.Js
- Firebase
- Twilio
- Material UI

# Pre- Requisites
1. A firebase project, add project credentials inside config.env file to get started.
2. A firebase developer account to enable using 'signin via google', add the credentials in env file
3. A Twilio account
# Getting Started:
# **1. Frontend**
### Environment Variables
`REACT_APP_APIKEY= "Firebase api key goes here"`
`REACT_APP_AUTHDOMAIN= "Firebase authdoamin"`
`REACT_APP_PROJECTID= "Firebase project ID"`
`REACT_APP_STORAGEBUCKET= "Firestore Storage Bucket"`
`REACT_APP_MESSAGINGSENDERID= "TMessage Sender ID"`
`REACT_APP_APPID= "Firebase APP id"`
`REACT_APP_MEASUREMENTID= "Firebase Measurement id" `
### Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# **2. Backend**
### Environment Variables
`TWILIO_KEY_1 = "Twilio Account Key 1"`
`TWILIO_KEY_2 = "Twilio Account Key 2"`
`PORT = "Port on which backend will run (default value 5000)"`
### Available Scripts
In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
