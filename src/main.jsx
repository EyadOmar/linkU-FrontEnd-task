import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import App from './App.jsx';
import en from './assets/locales/en/translation.json';
import ar from './assets/locales/ar/translation.json';
import './reset.css';
import './main.css';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
