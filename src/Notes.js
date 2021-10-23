import React from "react";
import "./Notes.css";

const Notes = ({ item, index, onDelete }) => {
  return (
    <>
      <div className="oneNote">
        <p className="inp">
          {item[0]} at {item[1]}
        </p>
        <button
          className="remove"
          onClick={() =>
            onDelete((prev) => {
              const tasks = [...prev];
              tasks.splice(index, 1);
              return tasks;
            })
          }
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default Notes;
