import { jsonToBase64 } from "@/utils/2D/sheds/utils";

const useSaveSelections = ({
  selectedComponents,
  exteriorFinish
}) => {
  const selections = {
    components: {
      ...selectedComponents,
    },
    exterior: exteriorFinish
  };

  const convertedSelections = jsonToBase64(selections);

  return { convertedSelections }
};

export default useSaveSelections;
