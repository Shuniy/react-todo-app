import React, { useState } from "react";

function InputArea(props) {
  const [Text, setText] = useState("");

  function handleChange(event) {
    var newValue = event.target.value;
    setText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={Text} />
      <button
        onClick={() => {
          props.onAdd(Text);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
