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
