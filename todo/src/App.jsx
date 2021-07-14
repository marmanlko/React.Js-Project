import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [items, setItems] = useState("");
  const [itemsnew, setItemsnew] = useState([]);
  const onchange = (event) => {
    setItems(event.target.value);
  };
  const onsubmit = () => {
    setItemsnew((oldItems) => {
      return [...oldItems, items];
    });
  };
  const delItems = (id) => {
    setItemsnew((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h3>ToDo List</h3>
          <br />
          <input type="text" placeholder="add items" onChange={onchange} />
          <button onClick={onsubmit}> + </button>
          <ol>
            {itemsnew.map((itemval, index) => {
              return (
                <ToDoList
                  id={index}
                  key={index}
                  text={itemval}
                  onSelect={delItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
