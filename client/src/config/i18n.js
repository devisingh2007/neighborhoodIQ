import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          app_name: 'NeighborhoodIQ',
          search_placeholder: 'Search for a neighborhood or city...',
          score_label: 'Neighborhood Score',
          safety: 'Safety',
          air_quality: 'Air Quality',
          amenities: 'Amenities',
          education: 'Education',
          transit: 'Transit',
          reviews: 'Reviews',
          compare: 'Compare',
        },
      },
      hi: {
        translation: {
          app_name: 'पड़ोसIQ (NeighborhoodIQ)',
          search_placeholder: 'पड़ोस या शहर खोजें...',
          score_label: 'पड़ोस स्कोर',
          safety: 'सुरक्षा',
          air_quality: 'हवा की गुणवत्ता',
          amenities: 'सुविधाएं',
          education: 'शिक्षा',
          transit: 'परिवहन',
          reviews: 'समीक्षाएं',
          compare: 'तुलना करें',
        },
      },
    },
  });

export default i18n;
