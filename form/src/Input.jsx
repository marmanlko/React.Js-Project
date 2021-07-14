import React, { useState } from "react";

const Input = () => {
  const [cname, fname] = useState();
  const [fullname, setname] = useState();
  const [clast, lastname] = useState("");
  const [clastnew, lastnamenew] = useState("");
  const inputEvent = (event) => {
    // console.log(event.target.value);
    fname(event.target.value);
  };
  const inputEvent2 = (event) => {
    lastname(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setname(cname);
    lastnamenew(clast);
  };

  return (
    <>
      <form onClick={onSubmit}>
        <div className="container">
          <div className="d-flex justify-content-center">
            <h2>
              {fullname}
              {clastnew}
            </h2>
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="input"
              type="text"
              onChange={inputEvent}
              placeholder="Enter Text..........."
              value={cname}
            />
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <input
              className="input"
              type="text"
              onChange={inputEvent2}
              placeholder="Enter Last name..............."
              value={clast}
            />
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <button className="button" type="submit">
              Click Here!!
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Input;
