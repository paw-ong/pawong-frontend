import React from "react";
import {Link} from 'react-router-dom';
import './PetCard.css';

function PetCard({ pet, type }) {
  return (
      <Link to={`/${type}/detail/${pet.id}`} className="card-link">
        <div className="card">
          <div className="card-img-container">
            <img src={pet.imgUrl} alt={pet.name || '동물 사진'} className="card-img"/>
          </div>
          <div className="card-content">
            <p className="pet-upKindNm">{pet.upKindNm || '정보 없음'}</p>
            <p className="pet-neuterYn">{pet.neuterYn || '정보 없음'}</p>
            <p className="pet-sexCd">{pet.sexCd || '정보 없음'}</p>
          </div>
        </div>
      </Link>
  )
}

export default PetCard;