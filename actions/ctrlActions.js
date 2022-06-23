export const CHANGE_LANGUAGE = 'ctrl/language';
export const TOGGLE_MENU = 'ctrl/toggle';

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  language: language,
});

export const toggleMobileMenu = (toggle) => ({
  type: TOGGLE_MENU,
  toggle: toggle,
});
