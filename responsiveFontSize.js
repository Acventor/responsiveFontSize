import { FONT_SIZES } from '../config';

/**
 * Функция responsiveFontSize позволяет создавать гибкий размер шрифта, зависящий от viewport size.
 * 
 * Принимает максимальный и минимальный размеры шрифта, а также значения viewport size, 
 * после которых шрифт перестает уменьшаться либо увеличиваться.
 * 
 * Автор идеи css-lock (css-шлюз): https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/
 *
 * @param {number} fsd - font size desktop. Наибольший размер шрифта
 * @param {number} fsm - font size mobile. Наименьший размер шрифта
 * @param {number} vsd - viewport size desktop. Ширина экрана, после которого шрифт перестает увеличиваться
 * @param {number} vsm - viewport size mobile. Ширина экрана, после которого шрифт перестает уменьшаться
 */

export default function(fsd, fsm, vsd, vsm) {
  // Основной размер шрифта на сайте
  let mainFontSize = parseInt(FONT_SIZES.main.default, 10);

  // Удаляем из строк все лишнее, оставляя только числа;
  // Шрифт в единицах rem переводим в пиксели
  fsd = parseFloat(fsd, 10) * mainFontSize;
  fsm = parseFloat(fsm, 10) * mainFontSize;
  vsd = parseInt(vsd, 10);
  vsm = parseInt(vsm, 10);

  // Вычисляем, сколько пикселей мы добавляем к размеру шрифта 
  // при увеличении ширины области просмотра на 1 пиксель
  let m = (fsd - fsm) / (vsd - vsm);
  // Вычисляем размер шрифта до того, как мы начинаем увеличивать
  //  размер области просмотра
  let b = fsm - m * vsm;

  // Умножаем "m" на ширину области просмотра "100vw"
  let mx = (m * 100).toFixed(3);
  // Делим "b" на основной размер шрифта на сайте, 
  // меняя значение в пикселях обратно на rem
  let mb = (b / mainFontSize).toFixed(2);

  return `calc(${mx}vw + ${mb}rem)`;
}
