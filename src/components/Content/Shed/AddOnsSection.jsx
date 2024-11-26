import AddMiscOption from "@/components/AddOption/Shed/AddMiscOption";
import { miscComponents } from "@/utils/constants/components/misc/misc";

const AddOnsSection = () => {
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
        Select your add-ons
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '2rem',
      }}>
        <AddMiscOption options={miscComponents} />
      </div>
    </>
  );
};

export default AddOnsSection;
