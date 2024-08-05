import ElevationToggle from '../ElevationToggle/ElevationToggle';
import style from './footer.module.css';

const Footer = ({
  selectedElevation,
  setSelectedElevation,
}) => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <ElevationToggle
          selectedElevation={selectedElevation}
          setSelectedElevation={setSelectedElevation}
        />
      </div>
    </div>
  );
};

export default Footer;
