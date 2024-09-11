import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '.partners__slider .swiper', sliderConfig.partners );
};

export {
  initSliders,
};
