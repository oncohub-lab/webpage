import { CHANGE_LANGUAGE, TOGGLE_MENU } from '../actions/ctrlActions';

const initialState = { language: 'en' };

export const ctrlReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      const lang = action.language === 'en' ? 'pl' : 'en';
      return { ...state, language: lang };
    }
    case TOGGLE_MENU: {
      const toggle = !action.toggle;
      return { ...state, toggle: toggle };
    }
    default:
      return state;
  }
};
