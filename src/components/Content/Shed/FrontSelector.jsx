import FrontOptions from '@/components/Layouts/FrontOptions';

const FrontSelector = () => {
  return (
    <>
      <div
        style={{
          fontFamily: 'Linotype',
          fontSize: '24px',
          fontWeight: '400',
          color: 'black',
          textAlign: 'center',
          marginTop: '1.5rem',
          marginBottom: '1rem',
        }}
      >
        Entry Type
      </div>
      <FrontOptions />
    </>
  );
};

export default FrontSelector;
