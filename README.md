## EE Calculator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

EE test version no: 04fa1404c2b3b7be0e5909d4ba93d1332bc76e98

You can see this working here - https://afrontenddev.github.io/

The project can be built by following these steps:

1.  Open your command line application in the root of the project and run `npm install`

2.  To run the development build and see in browser run `npm run start` - this should open a browser window to http://localhost:3000/

3.  To build the solution for production run `npm run build`

4.  To run the tests run `npm run test`

### TODO/Improvements
1) Logic in Calculator.jsx needs to be improved and refactored a little, time was short and whilst it works perfectly fine, if it were ongoing work it'd be a lot nicer to move some of the state updates into their own function and also potentially rework how the calculations are tracked.

2) The keypad buttons has a lot of repetitive code, this could be changed to be more DRY

3) More tests would be nice for the Calculator functionality