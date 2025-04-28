import React from "react";
import PropTypes from 'prop-types';
import PetCard from "./PetCard";
import LoadingSpinner from "../common/LoadingSpinner";
import "./AdoptionResultList.css";

function AdoptionResultList({ results, loading }) {
  if (loading) {
    return (
      <div className="adoption-result-loading">
        <LoadingSpinner />
      </div>
    );
  }
  
  if (!results || results.length === 0) {
    return <div className="adoption-result-empty">검색 결과가 없습니다.</div>;
  }

  // API 응답을 PetCard 형식에 맞게 변환
  const formatPetData = (item) => {
    // 나이 계산 (YYYY 형식을 "N살" 형식으로 변환)
    const currentYear = new Date().getFullYear();
    const ageInYears = item.age ? currentYear - item.age : null;
    const ageString = ageInYears ? `${ageInYears}살` : '나이 미상';

    return {
      id: item.adoptionId,
      imgUrl: item.popfile1, // API에서 제공하는 이미지 URL 사용
      upKindNm: item.kindNm || '기타',
      sexCd: item.sexCd === 'M' ? '수컷' : item.sexCd === 'F' ? '암컷' : '미상',
      age: ageString,
      neuterYn: item.neuterYn === 'Y' ? '중성화 O' : item.neuterYn === 'N' ? '중성화 X' : '중성화 미상'
    };
  };

  return (
    <div className="adoption-result-container">
      <div className="adoption-result-grid">
        {results.map((item) => (
          <div key={item.adoptionId} className="adoption-result-item">
            <PetCard pet={formatPetData(item)} type="adoption" />
          </div>
        ))}
      </div>
    </div>
  );
}

AdoptionResultList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    adoptionId: PropTypes.number,
    popfile1: PropTypes.string,
    kindNm: PropTypes.string,
    sexCd: PropTypes.string,
    age: PropTypes.number,
    neuterYn: PropTypes.string
  })),
  loading: PropTypes.bool
};

export default AdoptionResultList; 