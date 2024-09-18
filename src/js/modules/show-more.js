const showMore = document.querySelector( "#show-more" );
const productsLength = document.querySelectorAll( '.products__item' ).length;
let items = 6;

// Проверка на количество элементов
// Добавляем класс 'd-flex'

// Проверка ширины устройства
if ( window.innerWidth >= 992 ) {
  if ( productsLength > 6 ) {
    showMore.classList.add( 'd-flex' );

    showMore.addEventListener( 'click', () => {
      items += 3;
      const arrayProducts = Array.from( document.querySelector( '.products__list' ).children );
      const visItems = arrayProducts.slice( 0, items );

      visItems.forEach( el => el.classList.add( 'is-visible' ) );

      if ( visItems.length === productsLength ) {
        showMore.classList.remove( 'd-flex' );
      }
    } );

  }
}
