// collisionDetection.js

function rectanglesOverlap(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

export const boundingBoxCollisionDetection = ({
  active,
  collisionRect,
  droppableRects,
}) => {
  if (!active) return [];

  const collisions = droppableRects.filter(({ id, rect }) =>
    id !== active.id && rectanglesOverlap(collisionRect, rect)
  );

  return collisions.map(({ id }) => ({ id }));
};
