import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

import global_es from "./locales/es/translation.json";
import global_en from "./locales/en/translation.json"

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import {RouterProvider} from "react-router-dom";
import router from './reactRouter.jsx'



i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
      domain='dev-1caiugpj4be1yzto.us.auth0.com'
      clientId='RMOUffaEh9iu7PEjr6gbn6WoFfd8Zf5b'
      authorizationParams={{ redirect_uri: window.location.origin }}>
      <I18nextProvider i18n={i18next}>
          <RouterProvider router={router}>
            <Home />
          </RouterProvider>
      </I18nextProvider>
    </Auth0Provider>
);
