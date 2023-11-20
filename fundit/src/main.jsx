import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

import './I18n.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain='dev-1caiugpj4be1yzto.us.auth0.com'
  clientId='RMOUffaEh9iu7PEjr6gbn6WoFfd8Zf5b'
  authorizationParams={{redirect_uri: window.location.origin}}>
    <App />  
  </Auth0Provider>,
 
)
