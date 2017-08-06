import * as types from '../actions/actionTypes';
import siteContentFI from './siteContents-fi.json';
import siteContentEN from './siteContents-en.json';

const translations = {
  FI: { ...siteContentFI },
  EN: { ...siteContentEN }
}

const initialState = {
  languageCode: 'FI',
  languages: ['FI', 'EN'],
  siteContent: { ...translations.FI }
}

export default function siteContentReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_LANGUAGE:
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
