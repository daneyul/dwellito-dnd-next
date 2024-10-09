import { droppableWidth, toScale } from '@/utils/2D/utils';
import { useContext } from 'react';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import Draggable from '../Draggable';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

export const ShedDraggableContainer = ({
  selectedComponents,
  selectedComponent,
  handleSelect,
  draggableRefs,
  setHoveredPiece,
  setShowCollision,
}) => {
  const { scaleFactor, selectedElevation, selectedShed } =
    useContext(ShedDataContext);
  return (
    <div
      style={{
        width: `${toScale(
          droppableWidth(selectedElevation, DIMENSIONS, selectedShed),
        scaleFactor
        )}px`,
        height: '100%',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {selectedComponents
        .filter((item) => !item.notRendered)
        .map((piece) => (
          <Draggable
            piece={piece}
            key={piece.id}
            id={piece.id}
            onSelect={() => handleSelect(piece.id)}
            ref={draggableRefs[piece.id]}
            onHover={() => setHoveredPiece(piece)}
            onLeave={() => setHoveredPiece(null)}
            setShowCollision={setShowCollision}
            selectedComponent={selectedComponent}
          />
        ))}
    </div>
  );
};
