import CustomCubes from '../../public/logos/custom-cubes.svg';

const logos = {
  customCubes: CustomCubes
};

const Logo = ({ type = 'customCubes' }) => {
  const SelectedLogo = logos[type];

  return (
    <SelectedLogo />
  );
}

export default Logo;