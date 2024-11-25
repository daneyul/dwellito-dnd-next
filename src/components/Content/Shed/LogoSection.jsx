import { shedData } from '@/utils/constants/shedData';

const LogoSection = ({ data }) => {
  const selectedShed = shedData.find((shed) => shed.slug === data.slug);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'Linotype',
          fontSize: '24px',
          fontWeight: '400',
          color: 'black',
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        Relief Cottage {selectedShed.size} ({selectedShed.sqft} sqft)
      </div>
    </div>
  );
};

export default LogoSection;
