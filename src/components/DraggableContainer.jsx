import { droppableWidth, toScale } from '@/utils/2D/utils';
import { useContext } from 'react';
import { PageDataContext } from './Content/Content';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import Draggable from './Draggable';

export const DraggableContainer = ({
  selectedComponents,
  handleSelect,
  draggableRefs,
  setHoveredPiece,
}) => {
  const { scaleFactor, selectedElevation, selectedContainer } = useContext(PageDataContext);
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
        transform: 'translateX(-50%)'
      }}
    >
      {selectedComponents.map((piece) => (
        <Draggable
          piece={piece}
          key={piece.id}
          id={piece.id}
          onSelect={() => handleSelect(piece.id)}
          ref={draggableRefs[piece.id]}
          onHover={() => setHoveredPiece(piece)}
          onLeave={() => setHoveredPiece(null)}
        />
      ))}
    </div>
  );
};
