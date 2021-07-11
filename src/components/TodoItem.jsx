import React from "react";

function TodoItem(props) {
//   const [isClicked, setisClicked] = useState(false);

//   function handleClicks() {
//     setisClicked((prevIsClicked) => {
//       return !prevIsClicked;
//     });
//   }

  return (
    <div
      id="listItem"
      onClick={() => {
        props.onChecked(props.id);
      }}>
      <li>{props.todoText}</li>
    </div>
  );
}

export default TodoItem;
