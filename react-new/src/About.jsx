import React, { useState } from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
const About = () => {
  const [addItem, setItem] = useState();
  const [addArray, setArray] = useState([]);
  const addItems = () => {
    if (!addItem) {
      //if data empty in input field
    } else {
      setArray([...addArray, addItem]);
      setItem("");
    }
  };
  const deleteItems = (id) => {
    const updatedItems = addArray.filter((value, index) => {
      return index != id;
    });
    setArray(updatedItems);
  };
  const removeAll = () => {
    setArray([]);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <span style={{ color: "white" }}>
            <NoteAddIcon fontSize="large" />
          </span>
          <h5>Add Your List here</h5>
          <input
            type="text"
            placeholder="add items"
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            style={{ marginLeft: "-35px", fontSize: "25px" }}
            onClick={addItems}
          >
            +
          </button>
          <ol>
            {addArray.map((val, index) => {
              return (
                <li key={index}>
                  {val}
                  <button
                    style={{
                      marginLeft: "195px",
                      marginBottom: "8px",
                      fontSize: "25px",
                      color: "white",
                      position: "fixed",
                    }}
                    onClick={() => deleteItems(index)}
                  >
                    <DeleteForeverOutlinedIcon />
                  </button>
                </li>
              );
            })}
          </ol>
          <button className="btn3" onClick={removeAll}>
            Clear Check List
          </button>
        </div>
      </div>
    </>
  );
};
export default About;
