import { droppableWidth, toScale } from '@/utils/2D/utils';
import { useContext } from 'react';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import Draggable from './Draggable';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

export const DraggableContainer = ({
  selectedComponents,
  selectedComponent,
  handleSelect,
  draggableRefs,
  setHoveredPiece,
  setShowCollision,
}) => {
  const { scaleFactor, selectedElevation, selectedContainer } =
    useContext(ContainerDataContext);
  return (
    <div
      style={{
        width: `${toScale(
          droppableWidth(selectedElevation, DIMENSIONS, selectedContainer),
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
