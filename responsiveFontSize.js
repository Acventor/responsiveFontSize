/**
 * The function allows to create responsive font size that depends on viewport size.
 * 
 * Takes min and max font sizes + viewport size values, inside which the font must adapt its size
 * 
 * Based on CSS-lock idea by Tim Brown: https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/
 *
 * @param {number} fsd - font size desktop. Biggest font size in px (top limit)
 * @param {number} fsm - font size mobile. Smallest font size in px (bottom limit)
 * @param {number} vsd - viewport size desktop. After that font will stop increase its size
 * @param {number} vsm - viewport size mobile. After that font will stop decrease its size
 */

export default function(fsd, fsm, vsd, vsm) {
  // Calculate how many pixels we add to the font size 
  // when the viewport size increases by 1 pixel
  const m = (fsd - fsm) / (vsd - vsm);
  // Calculate the font size before the viewport size starts increasing
  const b = (fsm - m * vsm).toFixed(2);
  // Transfer m to viewport width units
  const mx = (m * 100).toFixed(3);

  return `calc(${mx}vw + ${b}px)`;
}
