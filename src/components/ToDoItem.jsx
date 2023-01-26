import React, { useState } from "react";

function ToDoItem(props) {
  const [textNewDecoration, setTextDecoration] = useState();
  function handleClick() {
    if (textNewDecoration === true) {
      setTextDecoration(false);
    } else {
      setTextDecoration(true);
    }
  }

  return (
    <div
      onClick={handleClick}
      onDoubleClick={() => {
        props.onDBLclick(props.id);
      }}
    >
      <li style={{ textDecoration: textNewDecoration ? "line-through" : null }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
