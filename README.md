# Reproducer for https://github.com/IBM/ibm-cos-sdk-js/issues/84

## To reproduce the issue in the listed repository

1. clone this repository
2. run `npm install`
3. run `npm run start`
4. open http://localhost:3000/
5. click "Trigger S3 SDK"
6. Check console output

```
Uncaught TypeError: AWS.util.isBrowser is not a function
    at HttpRequest.getUserAgentHeaderName (http.js:115)
    at HttpRequest.setUserAgent (http.js:111)
    at new HttpRequest (http.js:104)
    at new Request (request.js:323)
    at features.constructor.makeRequest (service.js:202)
    at features.constructor.svc.<computed> [as putObject] (service.js:515)
    at ManagedUpload.nextChunk (managed_upload.js:479)
    at ManagedUpload.fillBuffer (managed_upload.js:411)
    at ManagedUpload.send (managed_upload.js:201)
    at features.constructor.upload (s3.js:1183)
    at handleClick (App.js:22)
    at HTMLUnknownElement.callCallback (react-dom.development.js:3945)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:3994)
    at invokeGuardedCallback (react-dom.development.js:4056)
    at invokeGuardedCallbackAndCatchFirstError (react-dom.development.js:4070)
    at executeDispatch (react-dom.development.js:8243)
    at processDispatchQueueItemsInOrder (react-dom.development.js:8275)
    at processDispatchQueue (react-dom.development.js:8288)
    at dispatchEventsForPlugins (react-dom.development.js:8299)
    at react-dom.development.js:8508
    at batchedEventUpdates$1 (react-dom.development.js:22396)
    at batchedEventUpdates (react-dom.development.js:3745)
    at dispatchEventForPluginEventSystem (react-dom.development.js:8507)
    at attemptToDispatchEvent (react-dom.development.js:6005)
    at dispatchEvent (react-dom.development.js:5924)
    at unstable_runWithPriority (scheduler.development.js:468)
    at runWithPriority$1 (react-dom.development.js:11276)
    at discreteUpdates$1 (react-dom.development.js:22413)
    at discreteUpdates (react-dom.development.js:3756)
    at dispatchDiscreteEvent (react-dom.development.js:5889)
```

Of course, the credentials are not valid but I see the same issue with valid credentials.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
