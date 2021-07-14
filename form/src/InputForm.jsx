import React, { useState } from "react";

const InputForm = () => {
  const [cdetail, setDetail] = useState({
    fname: "",
    lname: "",
    email: "",
    mnumber: "",
  });
  const inputEvent = (event) => {
    console.log(event.target.value);

    const { name, value } = event.target;
    setDetail((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const onsubmit = (event) => {
    event.preventDefault();
    alert("Suceesfully Submited!!");
  };
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>
        {cdetail.fname}
        {cdetail.lname}
        {cdetail.email}
        {cdetail.mnumber}
      </h2>
      <form onSubmit={onsubmit}>
        <div className="row justify-content-center">
          <input
            type="text"
            onChange={inputEvent}
            placeholder="input first name............. "
            name="fname"
          />
        </div>
        <br />
        <div className="row justify-content-center">
          <input
            type="text"
            onChange={inputEvent}
            placeholder="input last name............"
            name="lname"
          />
        </div>
        <br />
        <div className="row justify-content-center">
          <input
            type="email"
            onChange={inputEvent}
            placeholder="input email@................."
            name="email"
          />
        </div>
        <br />
        <div className="row justify-content-center">
          <input
            type="number"
            onChange={inputEvent}
            placeholder="input mobile no.........."
            name="mnumber"
          />
        </div>
        <br />
        <div className="row justify-content-center">
          <button className="">Click Here</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
