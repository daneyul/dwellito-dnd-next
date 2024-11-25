import ShedSingleSelect from "@/components/SingleSelect/ShedSingleSelect";
import { EXTERIOR } from "@/utils/constants/names/names";

const ExteriorSection = () => {
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
        Paint Color
      </div>
      <ShedSingleSelect type={EXTERIOR} />
    </>
  );
};

export default ExteriorSection;
