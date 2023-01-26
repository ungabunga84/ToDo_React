import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function inputChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="form">
      <input type="text" value={inputText} onChange={inputChange} />
      <button
        type="submit"
        onClick={() => {
          props.addNote(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
