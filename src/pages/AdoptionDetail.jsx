import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './AdoptionDetail.css';
import userImage from '../assets/images/user.jpg'

function AdoptionDetail() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [adoptionData, setAdoptionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdoptionData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/adoptions/${id}`);
        if (!response.ok) {
          throw new Error('데이터를 불러오는데 실패했습니다.');
        }
        const data = await response.json();
        setAdoptionData(data);
      } catch (error) {
        console.error('Error fetching adoption data:', error);
        setModalMsg('데이터를 불러오는데 실패했습니다.');
        setShowModal(true);
        setTimeout(() => setShowModal(false), 1500);
      } finally {
        setLoading(false);
      }
    };

    fetchAdoptionData();
  }, [id]);

  const handleLike = () => {
    const nextLiked = !liked;
    setLiked(nextLiked);
    setModalMsg(nextLiked ? "즐겨찾기에 추가하였습니다." : "즐겨찾기가 해제되었습니다.");
    setShowModal(true);
    setTimeout(() => setShowModal(false), 1500);
  };

  const formatTime = (time) => {
    if (!time) return '문의바람';
    return time.slice(0, 2) + ':' + time.slice(2);
  };

  const formatOperatingHours = (startTime, endTime) => {
    if (!startTime || !endTime) return '문의바람';
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  };

  const displayValue = (value) => {
    return value || '문의바람';
  };

  const calculateAge = (birthYear) => {
    if (!birthYear) return '문의바람';
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear + 1;
    return `${age}세`;
  };

  if (loading) {
    return <div className="adoption-container">로딩 중...</div>;
  }

  if (!adoptionData) {
    return <div className="adoption-container">데이터를 불러올 수 없습니다.</div>;
  }

  const { adoptionDetailDto, shelterDetailDto } = adoptionData;

  return (
    <div className="adoption-container-row">
      <div className="adoption-container">
        <div className="adoption-center-row">
          <div className="adoption-image-info-group">
            <div className="adoption-image-box">
              <img src={adoptionDetailDto.popfile2 || userImage} alt="이미지" />
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
                  <span className="shelter-info-label">축종명</span>
                  <span className="shelter-info-value">{displayValue(adoptionDetailDto.upKindNm)}</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">성별</span>
                  <span className="shelter-info-value">
                    <span style={{fontSize: '24px', color: adoptionDetailDto.sexCd === 'M' ? '#2196F3' : '#FF69B4'}}>
                      {adoptionDetailDto.sexCd === 'M' ? '♂' : '♀'}
                    </span>
                  </span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">중성화여부</span>
                  <span className="shelter-info-value">
                    <img 
                      src={adoptionDetailDto.neuterYn === 'Y' ? 
                        "https://cdn-icons-png.flaticon.com/512/1828/1828640.png" : 
                        "https://cdn-icons-png.flaticon.com/512/1828/1828778.png"} 
                      alt={adoptionDetailDto.neuterYn === 'Y' ? "완료" : "미완료"} 
                      style={{width: '22px', height: '22px'}} 
                    />
                  </span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">체중</span>
                  <span className="shelter-info-value">{displayValue(adoptionDetailDto.weight)}</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">나이</span>
                  <span className="shelter-info-value">{calculateAge(adoptionDetailDto.age)}</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">색상</span>
                  <span className="shelter-info-value">{displayValue(adoptionDetailDto.colorCd)}</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">구조번호</span>
                  <span className="shelter-info-value">{displayValue(adoptionDetailDto.desertionNo)}</span>
                </div>
                <div className="shelter-info-item">
                  <span className="shelter-info-label">공고종료일</span>
                  <span className="shelter-info-value">{displayValue(adoptionDetailDto.noticeEdt)}</span>
                </div>
                <div className="shelter-info-item full-width">
                  <span className="shelter-info-label">특이사항</span>
                  <span className="shelter-info-value">{displayValue(adoptionDetailDto.tagsField)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="adoption-bottom-box">
          <div className="shelter-info">
            <div className="shelter-info-item">
              <span className="shelter-info-label">동물보호센터명</span>
              <span className="shelter-info-value">{displayValue(shelterDetailDto.careNm)}</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">전화번호</span>
              <span className="shelter-info-value">{displayValue(shelterDetailDto.careTel)}</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">휴무일</span>
              <span className="shelter-info-value">{displayValue(shelterDetailDto.closeDay)}</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">구조대상동물</span>
              <span className="shelter-info-value">{displayValue(shelterDetailDto.saveTrgtAnimal)}</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">동물보호센터 유형</span>
              <span className="shelter-info-value">{displayValue(shelterDetailDto.divisionNm)}</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">운영시간</span>
              <span className="shelter-info-value">
                {displayValue(`${shelterDetailDto.weekOprStime} - ${shelterDetailDto.weekOprEtime}`)}
              </span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">수의사 인원수</span>
              <span className="shelter-info-value">{displayValue(shelterDetailDto.vetPersonCnt)}</span>
            </div>
            <div className="shelter-info-item">
              <span className="shelter-info-label">사양관리사 인원수</span>
              <span className="shelter-info-value">{displayValue(shelterDetailDto.specsPersonCnt)}</span>
            </div>
            <div className="shelter-info-item full-width">
              <span className="shelter-info-label">소재지 도로명 주소</span>
              <span className="shelter-info-value">{displayValue(shelterDetailDto.careAddr)}</span>
            </div>
            <div className="shelter-info-notice">
            입양 안내 및 기타 문의 사항은 유선 연락 바랍니다
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
