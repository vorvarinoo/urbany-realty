const sliderConfig = {
  default: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
  },

  partners: {
    slidesPerView: 1.9,
    spaceBetween: 32,
    watchSlidesProgress: true,
    freeMode: true,
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prevs',
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        freeMode: false,
        slidesPerView: 3,
      },
      998: {
        slidesPerView: 5,
      },
    }
  },

  product: {
    slidesPerView: 1,
    lazy: true,
    watchSlidesProgress: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  },
};

const smoothScrollConfig = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false,
};

const modalConfig = {
  linkAttributeName: false,
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
};

const validateConfig = {
  justValidate: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--error-color)',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'center',
      position: 'absolute',
      bottom: '-16px',
      width: '100%',
    },
    errorFormClass: 'shaked',
    errorTimeout: 1500,
  },
  errorTimeout: 1500,
  mask: {
    bodyMask: ' (___) ___ __ __',
  }
};

const observerConfig = {
  scrollTop: {
    rootMargin: '600px',
    threshold: 1,
  },
};

const requestsConfig = {
  handlerURL: 'https://jsonplaceholder.typicode.com/posts',
};

export {
  sliderConfig,
  smoothScrollConfig,
  modalConfig,
  validateConfig,
  observerConfig,
  requestsConfig,
};
