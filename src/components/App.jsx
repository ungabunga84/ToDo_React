import React, { useState } from "react";
import Heading from "./Heading";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [notes, setNewNote] = useState("");

  function formSubmit(inputText) {
    if (inputText !== "") {
      setNewNote([...notes, inputText]);
    }
  }

  function deleteNote(id) {
    console.log(id);
    setNewNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Heading />

      <InputArea addNote={formSubmit} />

      <div>
        {notes?.length > 0 && (
          <ol>
            {notes.map((note, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={note}
                onDBLclick={deleteNote}
              />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default App;
