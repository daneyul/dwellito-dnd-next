/* eslint-disable @next/next/no-img-element */
import CustomCubes from '../../public/logos/customCubes/logo.svg';

const logos = {
  'custom-cubes': CustomCubes,
  'at-and-s': '/logos/atAndS/logo.png',
  'compact-cottages': '/logos/compactCottages/logo.png',
};

const Logo = ({ type }) => {
  const SelectedLogo = logos[type];

  return (
    <>
      {type === 'custom-cubes' ? (
        <SelectedLogo />
      ) : (
        <img
          src={SelectedLogo}
          style={{ maxWidth: '50%', maxHeight: '100%', margin: '0 auto' }}
          alt={`${type} logo`}
        />
      )}
    </>
  );
};

export default Logo;
