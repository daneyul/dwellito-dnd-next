import { toScale } from '@/utils/2D/sheds/utils';
import { useContext } from 'react';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import ShedDraggable from '../Models/Draggable/ShedDraggable';

export const ShedDraggableContainer = ({
  selectedComponents,
  selectedComponent,
  handleSelect,
  draggableRefs,
  setHoveredPiece,
  setShowCollision,
}) => {
  const { scaleFactor, selectedElevation } =
    useContext(ShedDataContext);
    
  return (
    <div
      style={{
        width: `${toScale(selectedElevation.objWidth, scaleFactor)}px`,
        height: '100%',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {selectedComponents
        .filter((item) => !item.notRendered)
        .map((piece) => (
          <ShedDraggable
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
