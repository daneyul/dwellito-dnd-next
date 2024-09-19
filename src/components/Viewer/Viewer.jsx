import React, {
  useCallback,
  useContext,
  useEffect,
} from 'react';
import ToggleView from '../ToggleView/ToggleView';
import { Models } from '../Models/Models';
import ToggleCamera from '../ToggleCamera/ToggleCamera';
import { PageDataContext } from '../Content/Content';
import ElevationToggle from '../ElevationToggle/ElevationToggle';
import style from './viewer.module.scss';
import { LeftArrow, RightArrow } from '../Arrows/Arrows';
import DnDViewer from '../DndViewer/DndViewer';

const Viewer = () => {
  const {
    setSelectedElevation,
    selectedElevationIndex,
    setSelectedElevationIndex,
    show3d,
    mappedElevations
  } = useContext(PageDataContext);

  const handleNext = useCallback(() => {
    setSelectedElevationIndex(
      (prevIndex) => (prevIndex + 1) % mappedElevations.length
    );
  }, [mappedElevations.length, setSelectedElevationIndex]);

  const handlePrevious = useCallback(() => {
    setSelectedElevationIndex(
      (prevIndex) =>
        (prevIndex - 1 + mappedElevations.length) % mappedElevations.length
    );
  }, [mappedElevations.length, setSelectedElevationIndex]);

  useEffect(() => {
    setSelectedElevation(mappedElevations[selectedElevationIndex]);
  }, [selectedElevationIndex, setSelectedElevation]);

  const showLeftArrow = selectedElevationIndex > 0 && !show3d;
  const showRightArrow =
    selectedElevationIndex < mappedElevations.length - 1 && !show3d;

  return (
    <>
      <div className={style.viewer}>
        <div
          style={{
            visibility: show3d ? 'visible' : 'hidden',
            position: 'absolute',
            width: "100%"
          }}
        >
          <Models />
        </div>
        <DnDViewer />
        {showLeftArrow && <LeftArrow handlePrevious={handlePrevious} />}
        {showRightArrow && <RightArrow handleNext={handleNext} />}
        <ToggleCamera />
        <ToggleView />
        <ElevationToggle />
      </div>
    </>
  );
};

export default Viewer;
