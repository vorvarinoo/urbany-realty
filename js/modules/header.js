import {
  isEscKey,
  breakpointChecker
} from './utils.js';

// import {
//   observerConfig
// } from './configs.js';

const resetOffsetTop = ( node ) => {
  if ( !node ) return;
  document.documentElement.style.setProperty(
    '--offset-top',
    `${node.offsetHeight - 1}px`
  );
};


export const initHeaderMenu = () => {
  const contentNode = document.querySelector( '.site__content' );
  const headerTopNode = document.querySelector( '.site__header' );
  const headerNode = document.querySelector( '.header' );

  const modalNode = document.querySelector( '.header-modal' );
  const modalTriggerNode = document.querySelector( '.header .just-burger' );


  if ( !modalNode || !modalTriggerNode ) return;

  const onEscKeydown = ( evt ) => {
    if ( isEscKey( evt ) && modalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      closeModal();
      return;
    }
  };

  function openModal() {
    document.documentElement.classList.add( 'is-block-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'false' );
    modalTriggerNode.classList.add( 'is-expanded' );
    document.addEventListener( 'keydown', onEscKeydown );
  }

  function closeModal() {
    document.documentElement.classList.remove( 'is-block-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'true' );
    modalTriggerNode.classList.remove( 'is-expanded' );
    document.addEventListener( 'keydown', onEscKeydown );
  }


  breakpointChecker( () => {
    resetOffsetTop( headerNode );
  }, () => {
    resetOffsetTop( headerNode );
  } );

  modalTriggerNode.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    modalNode.getAttribute( 'aria-hidden' ) === 'true' ?
      openModal() :
      closeModal();
  } );
};
