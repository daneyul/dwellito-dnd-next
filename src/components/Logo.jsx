import CustomCubes from '../../public/logos/customCubes/logo.svg';
import AtAndS from '../../public/logos/atAndS/logo.svg';

const logos = {
  "custom-cubes": CustomCubes,
  "at-and-s": AtAndS,
};

const Logo = ({ type = 'custom-cubes' }) => {
  const SelectedLogo = logos[type];

  return (
    <SelectedLogo />
  );
}

export default Logo;