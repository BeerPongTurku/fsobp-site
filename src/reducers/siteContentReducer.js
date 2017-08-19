import * as types from '../actions/actionTypes';
import siteContentFI from './siteContents-fi.json';
import siteContentEN from './siteContents-en.json';

const setCookie = (cname, cvalue, expirationDays) => {
  let cookie = cname + '=' + cvalue;
  if (expirationDays && Number.isInteger(expirationDays) && expirationDays > 0) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 10000));
    const expires = 'expires=' + date.toUTCString();
    cookie += ';' + expires;
  }
  cookie += ';path=/';
  document.cookie = cookie;
}


const getCookie = cname => {
  const decodedCookie = decodeURIComponent(document.cookie);
  const browserCookies = decodedCookie.split(';');
  const cookieValue = browserCookies.find(cookie => {
    const _cnameAndValue = cookie.split('=');
    return cname === _cnameAndValue[0].trim();
  });
  return cookieValue.split('=')[1];
}

const supportedLanguages = ['FI', 'EN'];
const initialLanguageCode = () => {
  const cookieLang = getCookie('lang');
  if (supportedLanguages.find(lang => lang === cookieLang)) {
    return cookieLang;
  }
  return 'FI';
}


const translations = {
  FI: { ...siteContentFI },
  EN: { ...siteContentEN }
}

const initialState = {
  languageCode: initialLanguageCode(),
  languages: supportedLanguages,
  siteContent: { ...translations.FI }
}

export default function siteContentReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_LANGUAGE:

      setCookie('lang', action.languageCode);
            //  Check that the language is available
      const selectedLanguage = state.languages.filter(language => language === action.languageCode);
      if (selectedLanguage) {
        return {
          ...state,
          languageCode: selectedLanguage[0]
        }
      }
      return { ...state }
    case types.LOAD_CONTENT:
      return {
        ...state,
        siteContent: translations[state.languageCode]
      }
    default:
      return state;
  }
}



