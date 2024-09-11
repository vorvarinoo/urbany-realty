document.addEventListener( 'DOMContentLoaded', function() {
  const languageSelect = document.querySelector( '.language-select' );
  const currentLanguage = languageSelect.querySelector( '.language-select__current' );
  const dropdown = languageSelect.querySelector( '.language-select__dropdown' );

  // Слушаем событие изменения в select
  dropdown.addEventListener( 'change', function() {
    // Обновляем отображаемый текущий язык
    currentLanguage.textContent = dropdown.value.toUpperCase();
  } );

  // Опционально: скрываем выпадающий список и показываем его при клике на текущий язык
  currentLanguage.addEventListener( 'click', function() {
    dropdown.classList.toggle( 'active' ); // переключаем видимость
  } );

  // Закрываем select, если был клик вне его
  document.addEventListener( 'click', function( event ) {
    if ( !languageSelect.contains( event.target ) ) {
      dropdown.classList.remove( 'active' );
    }
  } );
} );
