import React from "react";
import "./css/ReButton.css";

const ReButton = ({ func }) => {
  return (
    <div>
      <button id="re-button" onClick={func}>
        <img
          id="re-button-img"
          src="/regenerate.svg"
          alt=""
          width={30}
        />
      </button>
    </div>
  );
};

export default ReButton;
