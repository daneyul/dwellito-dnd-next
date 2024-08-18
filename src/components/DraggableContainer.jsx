import { droppableWidth, toScale } from '@/utils/2D/utils';
import { Draggable } from './Draggable';
import { useContext } from 'react';
import { PageDataContext } from './Content/Content';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';

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
        transform: 'translateX(-50%)',
        border: '1px solid red'
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
