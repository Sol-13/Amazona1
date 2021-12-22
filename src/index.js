import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./reducer";
import { StateProvider } from '/StateProvider';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
 
    
   
    <StateProvider initialState={initialState} reducer={reducer}>
    <Auth0Provider     
      domain="solalvar.us.auth0.com"
      clientId="0gNsB17hSl0w6FzHPYAt5ly2IINV45Tn"
      redirectUri={window.location.origin}>
      <App />
      </Auth0Provider>
    </StateProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
