import CustomCubes from '../../public/logos/customCubes/logo.svg';

const logos = {
  "custom-cubes": CustomCubes,
  "at-and-s": "/logos/atAndS/logo.png",
};

const Logo = ({ type }) => {
  const SelectedLogo = logos[type];

  return (
    <>
      {type === "custom-cubes" ? (
        <SelectedLogo />
      ) : (
        <img src={SelectedLogo} alt={`${type} logo`} />
      )}
    </>
  );
};

export default Logo;
