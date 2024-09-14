document.addEventListener( 'DOMContentLoaded', function() {
  const languageSelects = document.querySelectorAll( '.select' ); // Находим все элементы с классом .select

  // Проверяем, есть ли хотя бы один элемент с классом .select на странице
  if ( languageSelects.length === 0 ) return;

  languageSelects.forEach( function( languageSelect ) {
    const currentLanguage = languageSelect.querySelector( '.select__current' );
    const dropdown = languageSelect.querySelector( '.select__dropdown' );

    // Проверяем, что элементы currentLanguage и dropdown существуют
    if ( !currentLanguage || !dropdown ) return;

    // Слушаем событие изменения в select
    dropdown.addEventListener( 'change', function() {
      // Обновляем отображаемый текущий язык
      currentLanguage.textContent = dropdown.value.toUpperCase();
    } );

    // Опционально: скрываем выпадающий список и показываем его при клике на текущий язык
    currentLanguage.addEventListener( 'click', function() {
      dropdown.classList.toggle( 'active' ); // Переключаем видимость
    } );

    // Закрываем select, если был клик вне его
    document.addEventListener( 'click', function( event ) {
      if ( !languageSelect.contains( event.target ) ) {
        dropdown.classList.remove( 'active' );
      }
    } );
  } );
} );
