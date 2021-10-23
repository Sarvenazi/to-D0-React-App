import "./App.css";
import TimePicker from "react-time-picker";
import Notes from "./Notes";
import { useState } from "react";

function App() {
  const [value, onValueChange] = useState("00:00");
  const [inputs, setInputs] = useState("");
  const [valid, setValid] = useState(true);
  const [Note, setNote] = useState(
    localStorage.getItem("myTasks")
      ? JSON.parse(localStorage.getItem("myTasks"))
      : []
  );

  if (Note.length === 0) {
    localStorage.clear();
  } else {
    localStorage.setItem("myTasks", JSON.stringify(Note));
  }

  return (
    <div className="App">
      <p>To Do List</p>
      <div className="box">
        <div className="timeData">
          <input
            className={valid ? "inputData" : "inputData emptyInput"}
            type="text"
            placeholder=" Add a New ToDo"
            onChange={(e) => {
              setInputs(e.target.value);
              setValid(true);
            }}
          ></input>

          <TimePicker onChange={onValueChange} className="timepicker" />
          <button
            className="addNote"
            onClick={() => {
              inputs === ""
                ? setValid(false)
                : setNote((last) => [...last, [inputs, value]]);
            }}
          >
            Add
          </button>
        </div>
        <div className="Notes">
          {Note.map((item, index) => {
            return <Notes key={index} item={item} onDelete={setNote} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
