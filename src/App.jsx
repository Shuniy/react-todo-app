import React, { useState } from "react";
import InputArea from "./components/InputArea";
import TodoItem from "./components/TodoItem";

function App() {
  // Stateful Todo Items Array
  const [Items, setItems] = useState([]);

  // Function to add todoItems to array
  function addItems(InputText) {
    setItems((prevItems) => {
      return [InputText, ...prevItems];
    });
  }

  // Function to delete the todo item on click
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <p>1.) To Add To-Do Item just write and click Add button.</p>
      <p>2.) To Delete To-Do Item just click on it.</p>
      <InputArea onAdd={addItems} />
      <div>
        <ul>
          {Items.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                todoText={item}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
