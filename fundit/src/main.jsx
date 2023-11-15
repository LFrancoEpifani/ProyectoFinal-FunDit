import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { redirect } from 'next/dist/server/api-utils/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain='dev-1caiugpj4be1yzto.us.auth0.com'
  clientId='RMOUffaEh9iu7PEjr6gbn6WoFfd8Zf5b'
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>

       <App />  

  </Auth0Provider>,
 
)
