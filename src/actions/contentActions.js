import * as types from './actionTypes';

export const loadContent = () => dispatch => {
  dispatch({
    type: types.LOAD_CONTENT
  })
}

export const changeLanguage = languageCode => dispatch => {
  dispatch({
    type: types.CHANGE_LANGUAGE,
    languageCode
  })
  loadContent()(dispatch);
}
