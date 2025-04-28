import React from "react";
import "./AddressModal.css";

function AddressModal({ onClose }) {
  return (
    <div className="address-modal-backdrop">
      <div className="address-modal">
        <h2>지역 조건 추가</h2>
        <p>여기에 지역 조건 입력 UI가 들어갑니다.</p>
        <button className="close-btn" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default AddressModal; 