import { jsonToBase64 } from "@/utils/2D/containers/utils";

const useSaveSelections = ({
  selectedComponents,
  interiorFinish,
  exteriorFinish,
  flooring,
  selectedContainerHeight,
}) => {
  const selections = {
    components: {
      ...selectedComponents,
    },
    interior: interiorFinish,
    exterior: exteriorFinish,
    flooring: flooring,
    containerHeight: selectedContainerHeight,
  };

  const convertedSelections = jsonToBase64(selections);

  return { convertedSelections }
};

export default useSaveSelections;
