import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PetCard from '../pet/PetCard';
import client from '../../api/client';
import './FavoritesSlider.css';

// 화살표 이미지 임포트
import arrowLeft from '../../assets/images/icons/arrow-left.svg';
import arrowRight from '../../assets/images/icons/arrow-right.svg';

// Swiper 스타일 임포트
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function FavoritesSlider() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      const userToken = localStorage.getItem('userToken');
      
      if (!userToken) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await client.get('/users/me/favorites')
        // console.log('찜 목록 응답:', data);
        setFavorites(data.favoritesList || []);
      } catch (error) {
        console.error('찜 목록 로딩 중 오류 발생:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  // PetCard 형식에 맞게 데이터 변환
  const formatPetData = (item) => {
    const currentYear = new Date().getFullYear();
    const ageInYears = item.age ? currentYear - item.age : null;
    const ageString = ageInYears ? `${ageInYears}살` : '나이 미상';

    return {
      id: item.adoptionId,
      imgUrl: item.popfile1,
      upKindNm: item.kindNm || '기타',
      sexCd: item.sexCd === 'M' ? '수컷' : item.sexCd === 'F' ? '암컷' : '미상',
      age: ageString,
      neuterYn: item.neuterYn === 'Y' ? '중성화 O' : item.neuterYn === 'N' ? '중성화 X' : '중성화 미상'
    };
  };

  if (loading) {
    return <div className="favorites-loading">찜 목록을 불러오는 중...</div>;
  }

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <p>찜한 공고가 없습니다.</p>
        <p>마음에 드는 공고를 찜해보세요!</p>
      </div>
    );
  }

  return (
    <div className="favorites-slider-container">
      <h2 className="favorites-title">내가 찜한 공고</h2>
      
      {/* 커스텀 네비게이션 버튼을 위한 이미지 요소 */}
      <div className="favorites-navigation-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={5}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="favorites-swiper"
        >
          {favorites.map(pet => (
            <SwiperSlide key={pet.adoptionId}>
              <div className="favorites-slide">
                <PetCard pet={formatPetData(pet)} type="adoption" />
              </div>
            </SwiperSlide>
          ))}
          
          {/* 커스텀 네비게이션 버튼 */}
          <div className="swiper-button-prev-custom">
            <img src={arrowLeft} alt="이전" />
          </div>
          <div className="swiper-button-next-custom">
            <img src={arrowRight} alt="다음" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default FavoritesSlider; 