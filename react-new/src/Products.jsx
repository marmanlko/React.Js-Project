import React, { useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

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
              Add To Cart <AddShoppingCartIcon style={{ color: "white" }} />
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
          <Card
            id="1"
            title="Paneer Biryani"
            img="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/paneer-biryani-recipe-500x500.jpg"
            pdetails="Best Food"
          />
          <Card
            id="2"
            title="Tikka Biryani"
            img="https://i.ytimg.com/vi/7pz2mhyGjC8/maxresdefault.jpg"
            pdetails="Best Food"
          />
          <Card
            id="3"
            title="Paneer Biryani"
            img="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/paneer-biryani-recipe-500x500.jpg"
            pdetails="Best Food"
          />
          <Card
            id="4"
            title="Tikka Biryani"
            img="https://i.ytimg.com/vi/7pz2mhyGjC8/maxresdefault.jpg"
            pdetails="Best Food"
          />
          <Card
            id="5"
            title="Paneer Biryani"
            img="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/paneer-biryani-recipe-500x500.jpg"
            pdetails="Best Food"
          />
          <Card
            id="6"
            title="Tikka Biryani"
            img="https://i.ytimg.com/vi/7pz2mhyGjC8/maxresdefault.jpg"
            pdetails="Best Food"
          />
          <Card
            id="7"
            title="Paneer Biryani"
            img="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/paneer-biryani-recipe-500x500.jpg"
            pdetails="Best Food"
          />
          <Card
            id="8"
            title="Tikka Biryani"
            img="https://i.ytimg.com/vi/7pz2mhyGjC8/maxresdefault.jpg"
            pdetails="Best Food"
          />
          <Card
            id="9"
            title="Paneer Biryani"
            img="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/paneer-biryani-recipe-500x500.jpg"
            pdetails="Best Food"
          />
          <Card
            id="10"
            title="Tikka Biryani"
            img="https://i.ytimg.com/vi/7pz2mhyGjC8/maxresdefault.jpg"
            pdetails="Best Food"
          />
          <Card
            id="11"
            title="Paneer Biryani"
            img="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/paneer-biryani-recipe-500x500.jpg"
            pdetails="Best Food"
          />
          <Card
            id="12"
            title="Tikka Biryani"
            img="https://i.ytimg.com/vi/7pz2mhyGjC8/maxresdefault.jpg"
            pdetails="Best Food"
          />
        </div>
      </div>
    </>
  );
};

export default Products;
