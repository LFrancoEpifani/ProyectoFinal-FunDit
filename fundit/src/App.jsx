import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import { useTranslation } from "react-i18next";



function App() {

  const {t, i18n} = useTranslation();

  useEffect(() => {
    const lng = navigator.lenguage;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.lenguage;

  return (
    <div className="w-full">
      <h1>{t('events')}</h1>
      <h2>Lenguge: {lng}</h2>
      <Header />
      <Main />
    </div>
  );
}

export default App;
