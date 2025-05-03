import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './AdoptionDetail.css';
import userImage from '../assets/images/user.jpg'

function AdoptionDetail() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLike = () => {
    const nextLiked = !liked;
    setLiked(nextLiked);
    setModalMsg(nextLiked ? "즐겨찾기에 추가하였습니다." : "즐겨찾기가 해제되었습니다.");
    setShowModal(true);
    setTimeout(() => setShowModal(false), 1500);
  };

  return (
    <div className="adoption-container-row">
      <div className="adoption-container">
        <div className="adoption-center-row">
          <div className="adoption-image-info-group">
            <div className="adoption-image-box">
              <img src={userImage} alt="이미지" />
              <button 
                className={`adoption-like-btn${liked ? ' liked' : ''}`}
                onClick={handleLike}
              >
                찜
              </button>
            </div>
            <div className="adoption-info-box">
              <div className="shelter-info">
                <div className="shelter-info-item">
                  <span className="shelter-info-label">종류</span>
                  <span className="shelter-info-value">포메라니안</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">나이</span>
                  <span className="shelter-info-value">3~4개월 추정</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">성별</span>
                  <span className="shelter-info-value">
                    <span style={{fontSize: '24px', color: '#2196F3'}}>♂</span>
                  </span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">특이사항</span>
                  <span className="shelter-info-value">-</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">접종유무</span>
                  <span className="shelter-info-value">1차 완료</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">중성화유무</span>
                  <span className="shelter-info-value">
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="미완료" style={{width: '22px', height: '22px'}} />
                  </span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">보호소로 오게 된 이유</span>
                  <span className="shelter-info-value">케어불가</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">맡겨지기 전 가정 환경</span>
                  <span className="shelter-info-value">-</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">좋아하는 것</span>
                  <span className="shelter-info-value">사람,사료,놀이</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">싫어하는 것</span>
                  <span className="shelter-info-value">좁은 공간</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="adoption-bottom-box">
          <div className="shelter-info">
            <div className="shelter-info-item">
              <span className="shelter-info-label">보호소명</span>
              <span className="shelter-info-value">행복동물보호소</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">보호소번호</span>
              <span className="shelter-info-value">123-456</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">관리기관명</span>
              <span className="shelter-info-value">서울동물관리센터</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">보호소 유형</span>
              <span className="shelter-info-value">공공</span>
            </div>
            <div className="shelter-info-item full-width">
              <span className="shelter-info-label">도로명주소</span>
              <span className="shelter-info-value">서울특별시 강남구 테헤란로 123</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">운영시간</span>
              <span className="shelter-info-value">09:00 ~ 18:00</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">휴무일</span>
              <span className="shelter-info-value">일요일</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">전화번호</span>
              <span className="shelter-info-value">02-123-4567</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">진료가능종</span>
              <span className="shelter-info-value">개, 고양이, 토끼, 햄스터</span>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="adoption-modal">
          {modalMsg}
        </div>
      )}
    </div>
  );
}

export default AdoptionDetail;
