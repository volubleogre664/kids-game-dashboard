import { useState } from "react";

import { MdExpandLess, MdExpandMore } from "react-icons/md";

import "./Lesson.css";

function Lesson({ lessonName, modules, onClick }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    typeof onClick === "function" && onClick();
  };

  return (
    <button className="lesson" onClick={handleClick}>
      <div>
        <h3>{lessonName}</h3>
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </div>

      {open && (
        <ul onClick={(e) => e.stopPropagation()} className="lesson__modules">
          {modules.map((module) => (
            <li>{module}</li>
          ))}
        </ul>
      )}
    </button>
  );
}

export default Lesson;
