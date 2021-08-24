import React, { useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Sdata from "./Sdata";

const Card = (props) => {
  const [cart, setCart] = useState(0);
  const OnClick = () => {
    setCart(cart + 1);
  };
  return (
    <>
      <div className="col-md-3" style={{ margin: "10px 0px 10px 0px" }}>
        <div className="card">
          <div className="card-body">
            <p className="card-text">{props.title}</p>
          </div>
          <img className="card-img-top" src={props.img} alt="Card image cap" />
          <div className="card_footer">
            <button className="btn_footer" onClick={OnClick}>
              <AddShoppingCartIcon
                style={{ color: "white", fontSize: "24px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {Sdata.map((val) => {
            return <Card title={val.title} img={val.img} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
