import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '.partners__slider .swiper', sliderConfig.partners );

  document.querySelectorAll( '.product__slider' ).forEach( slider => {
    initSlider( slider, sliderConfig.product );
  } );


};

export {
  initSliders,
};
