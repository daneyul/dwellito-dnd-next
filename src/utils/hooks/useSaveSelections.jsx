import { jsonToBase64 } from "../2D/containers/utils";

const useSaveSelections = ({
  selectedComponents,
  interiorFinish,
  exteriorFinish,
  flooring,
}) => {
  const selections = {
    components: {
      ...selectedComponents,
    },
    interior: interiorFinish,
    exterior: exteriorFinish,
    flooring: flooring,
  };

  const convertedSelections = jsonToBase64(selections);

  return { convertedSelections }
};

export default useSaveSelections;
