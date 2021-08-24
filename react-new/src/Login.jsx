import React, { useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const onClick = () => {};
  return (
    <>
      <div className="main_div">
        <div className="center_div_login">
          <h4 style={{ color: "tomato", textDecoration: "underline" }}>
            Login Page{name}
            {password}
          </h4>
          <br />
          <input
            className="input_login"
            type="text"
            placeholder="input username"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br /> <br />
          <input
            className="input_login"
            type="password"
            placeholder="input password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <br />
          <button className="btn3" onClick={onClick}>
            Login
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
