import React from "react";
import "./PrimaryButton.css";

function PrimaryButton({ children, onClick, ...props }) {
  return (
    <button className="primary-btn" onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default PrimaryButton; 