import React from "react";
import { useParams, useHistory } from "react-router-dom";
const Error = () => {
  const history = useHistory();
  //   const { fname } = useParams();
  return (
    <>
      <div className="error">
        <h2>Oops!! Page not found</h2>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          Go Back<i className="fa fa-home"></i>
        </button>
      </div>
    </>
  );
};

export default Error;
