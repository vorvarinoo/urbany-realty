document.addEventListener( 'DOMContentLoaded', function() {
  // Находим все radio-кнопки на странице
  const radioButtons = document.querySelectorAll( 'input[type="radio"]' );

  // Если на странице нет элементов с типом radio, прекращаем выполнение
  if ( radioButtons.length === 0 ) return;

  // Переменная для хранения ранее выбранной кнопки в каждой группе
  let lastCheckedRadio = {};

  radioButtons.forEach( function( radio ) {
    radio.addEventListener( 'click', function( event ) {
      const groupName = radio.name; // Группа радиокнопок определяется по атрибуту name

      // Если текущая радио-кнопка была выбрана ранее в той же группе, отменяем выбор
      if ( lastCheckedRadio[ groupName ] === radio ) {
        radio.checked = false;
        lastCheckedRadio[ groupName ] = null; // Сбрасываем сохранённую кнопку для этой группы
      } else {
        // Иначе сохраняем выбранную кнопку для этой группы
        lastCheckedRadio[ groupName ] = radio;
      }
    } );
  } );
} );
