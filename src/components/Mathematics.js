import "./Mathematics.css";
import Tile from "./Tile";

function Mathematics() {
  return (
    <div className="maths">
      <h2>Mathematics Modules</h2>

      <div className="maths__modules">
        <Tile completed="5" total="10" title="Addition" />
        <Tile completed="4" total="10" title="Subtraction" />
        <Tile completed="2" total="8" title="Multiplication" />
        <Tile completed="1" total="5" title="Division" />
      </div>
    </div>
  );
}

export default Mathematics;
