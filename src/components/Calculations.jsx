import { checkDistance } from "../utils/2D/utils";

const Calculations = ({ piece }) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div style={{ fontWeight: 600 }}>{piece.name}</div>
      <div>
        {piece.name} is {checkDistance({ piece }).left} inches from the left
      </div>
      <div>
        {piece.name} is {checkDistance({ piece }).right} inches from the right
      </div>
      <div>
        {piece.name} is {checkDistance({ piece }).top} inches from the top
      </div>
    </div>
  );
};

export default Calculations;
