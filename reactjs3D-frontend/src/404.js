import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flexBox">
      <h1>Lost in Space ?</h1>
      <button
        className="back"
        onClick={() => {
          navigate("/");
        }}
      >
        Come, i will return you home{" "}
      </button>
    </div>
  );
};

export default ErrorPage;
