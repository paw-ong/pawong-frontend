import React from "react";
import AdoptionRecommendList from "../components/pet/AdoptionRecommendList.jsx";
import LostAnimalList from "../components/pet/LostAnimalList.jsx";
import './MainPage.css';
import Adoption from "../assets/images/main/Adoption.png";
import LostAnimal from "../assets/images/main/LostAnimal.png";
import {useNavigate} from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
      <div className="main">
        <div className="lists-container">
          <AdoptionRecommendList />
          {/*<LostAnimalList /> */}
          <div className="main-move-btns" style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32 }}>
            <button
                className="move-btn-vertical"
                onClick={() => navigate('/adoptions')}
                type="button"
            >
              <img src={Adoption} alt="입양동물" className="move-btn-img" />
              <span>입양 동물</span>
            </button>
            <button
                className="move-btn-vertical"
                onClick={() => navigate('/lostAnimal')}
                type="button"
            >
              <img src={LostAnimal} alt="실종동물" className="move-btn-img" />
              <span>실종 동물</span>
            </button>
          </div>
        </div>
      </div>
  );
}

export default MainPage;