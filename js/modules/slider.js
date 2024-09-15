import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '.partners__slider .swiper', sliderConfig.partners );

  document.querySelectorAll( '.product__slider' ).forEach( ( swiperEl, index ) => {
    new Swiper( swiperEl, {
      slidesPerView: 1,
      lazy: true,
      watchSlidesProgress: true,
      loop: true,
      pagination: {
        el: swiperEl.closest( 'article' ).querySelector( '.swiper-pagination' ), // Контейнер для пагинации вне слайдера
        clickable: true,
      },
    } );
  } );


};

export {
  initSliders,
};
