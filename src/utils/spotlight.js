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
 * lights the element. Passive — never calls preventDefault, so the page still
 * scrolls normally while the beam follows.
 *
 * Sets `data-touching` to claim ownership of the beam: a scroll-driven
 * positioner writing the same two vars must stand down while a finger is
 * down, or the two fight over the beam frame by frame.
 */
export const handleTouchSpotlight = (e) => {
  const touch = e.touches[0];
  if (!touch) return;
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.dataset.touching = 'true';
  el.style.setProperty('--spot-x', `${touch.clientX - rect.left}px`);
  el.style.setProperty('--spot-y', `${touch.clientY - rect.top}px`);
  el.classList.add('is-lit');
};

/** Releases the beam back to whatever else positions it. */
export const clearTouchSpotlight = (e) => {
  delete e.currentTarget.dataset.touching;
};
