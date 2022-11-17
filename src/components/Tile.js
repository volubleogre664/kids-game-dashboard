import "./Tile.css";

function Tile({ title, completed, total }) {
  return (
    <div className="tile">
      <div className="tile__header">
        <h3>{title}</h3>
        <p>
          Completed ({completed} of {total})
        </p>
      </div>
    </div>
  );
}

export default Tile;
