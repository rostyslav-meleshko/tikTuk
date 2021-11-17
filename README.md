Working app you can test in browser following [this](https://rostyslav-meleshko.github.io/tikTuk/) link.

During the implementation of the task, I met a malfunction on the serverside, calling method 'Get User Feed'. The response was broken. This part of the task was implemented by the replacement method by 'Get Trending Feed'.

Method 'Get User Info' working correctly, but receiving data not so informative to show on the client (missing 'name' and other useful data). This part of the task I solved by adding props from the trending feed line. Implemented by redux. Method remained in <UserInfo> component, just to show, how it will work with good data from the server, and for handling the possible server error.

Navigation between pages was provided with react-router. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
