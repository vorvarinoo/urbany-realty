import {
  initSiteSettings
} from "./modules/settings.js";
import {
  initHeaderMenu
} from "./modules/header.js";
import {
  initModals
} from "./modules/modal.js";
import {
  initSliders
} from "./modules/slider.js";
import {
  validateForms
} from "./modules/validate.js";

import "./modules/select.js";

document.addEventListener( "DOMContentLoaded", () => {
  initSiteSettings();

  window.addEventListener( "load", () => {
    validateForms();
    initModals();
    initSliders();
    initHeaderMenu();
  } );
} );
