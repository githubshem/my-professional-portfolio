/**
 * Writes the cursor's position, relative to the hovered element, into
 * --spot-x / --spot-y. Cursor-tracked hover treatments (.card-torch,
 * .card-spotlight) read those two vars to position their gradients.
 */
export const handleSpotlight = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
};

/**
 * Touch equivalent. Writes the same two vars from the first touch point and
 * lights the element, so a finger drag takes over from whatever else was
 * positioning the beam. Passive — never calls preventDefault, so the page
 * still scrolls normally while the beam follows.
 */
export const handleTouchSpotlight = (e) => {
  const touch = e.touches[0];
  if (!touch) return;
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--spot-x', `${touch.clientX - rect.left}px`);
  el.style.setProperty('--spot-y', `${touch.clientY - rect.top}px`);
  el.classList.add('is-lit');
};
