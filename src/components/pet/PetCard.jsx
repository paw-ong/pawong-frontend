import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './PetCard.css';
import likeImg from '../../assets/images/like/like.png';
import unlikeImg from '../../assets/images/like/unlike.png';

function PetCard({ pet, type }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    setIsLoggedIn(!!userToken);

    // if (userToken) {
    //   fetch('api 링크',{
    //     headers: {
    //       'Authorization': `Bearer ${userToken}`
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     setIsFavorite(data.isFavorite)
    //   })
    //   .catch(error => console.error('찜 상태 확인 실패: ', error));
    // }
  }, [pet.id]);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);

    // const userToken = localStorage.getItem('userToken');
    //
    // if (!userToken) {
    //   alert('로그인이 필요한 서비스입니다!');
    //   return;
    // }
    //
    // fetch(`api 링크/${isFavorite ? 'remove' : 'add'}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${userToken}`
    //   },
    //   body: JSON.stringify({
    //     petId: pet.id,
    //     petType: type
    //   })
    // })
    // .then(response => {
    //     if (!response.ok) {
    //       throw new Error('찜 처리 실패');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //   console.log('찜 처리 성공: ', data);
    // })
    // .catch(error => {
    //   console.error('찜 처리 실패: ', error);
    //   setIsFavorite(!isFavorite);
    // });
  };

  return (
    <Link to={`/${type}/${pet.id}`} className="card-link">
      <div className="card">
        <div className="card-img-container">
          <img src={pet.imgUrl} alt={pet.name || '동물 사진'} className="card-img"/>
          <button className={`favorite-btn ${isFavorite ? 'active' : ''}`} onClick={handleFavoriteClick}>
            <img src={isFavorite ? likeImg : unlikeImg}
                 alt={isFavorite ? "찜 해제" : "찜 하기"}
                 className="favorite-icon"
            />
          </button>
        </div>
        <div className="card-content">
          <p className="pet-kindNm">{pet.kindNm || '정보 없음'}</p>
          <div className="pet-info-row">
            <span className="pet-sexCd">{pet.sexCd || '정보 없음'}</span>
            <span className="info-divider">•</span>
            <span className="pet-age">{pet.age || '정보 없음'}</span>
          </div>
          <p className="pet-neuterYn">{pet.neuterYn || '중성화 정보 없음'}</p>
        </div>
      </div>
    </Link>
  );
}

export default PetCard;