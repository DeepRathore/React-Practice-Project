import React from 'react'; // imports the React library so that we can use its features in our code.
import ReactDOM from 'react-dom/client'; //  imports the ReactDOM library, which is used to render React components to the DOM.
import './index.css'; // imports a CSS file that contains styles for the application.
import App from './App'; // imports App component is the root component of the application.
// reportWebVitals function from the reportWebVitals.js file. This function can be used to measure the performance of the application.
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // root element where all react components will be render (ROOT - TYPE)
root.render(
  // StrictMode React performs a series of checks to detect potential problems in your code. 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.createElement(type, [props], [...children])


reportWebVitals();
