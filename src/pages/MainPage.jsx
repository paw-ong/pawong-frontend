import React from "react";
import AdoptionList from "../components/pet/AdoptionList.jsx";
import LostAnimalList from "../components/pet/LostAnimalList.jsx";
import './MainPage.css';

function MainPage() {
  return (
      <div className="main">
        <div className="lists-container">
          <AdoptionList />
          <LostAnimalList />
        </div>
      </div>
  );
}

export default MainPage;