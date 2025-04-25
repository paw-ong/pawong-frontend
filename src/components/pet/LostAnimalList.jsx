import React, {useState,useEffect} from 'react';
import PetCard from "./PetCard.jsx";
import './List.css'
import userImage from '../../assets/images/user.jpg';

function LostAnimalList() {
  const [pets, setPets] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  //
  // useEffect(() => {
  //   const fetchPets = async () => {
  //     try {
  //       setLoading(true);
  //       const reponse = await axios.get('api link');
  //       setPets(Reponse.data);
  //     } catch (error) {
  //       setError(error.message || '데이터를 불러오는데 실패했습니다.');
  //       console.error('데이터를 불러오는데 실패했습니다: ', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //
  //   fetchPets();
  // }, []);


  useEffect(() => {
    const dummyPets = [
      {
        id: 1,
        upKindNm : '토끼',
        neuterYn : '예',
        sexCd: '암컷',
        imgUrl: userImage
      },
      {
        id: 2,
        upKindNm : '토끼',
        neuterYn : '예',
        sexCd: '암컷',
        imgUrl: userImage
      },
      {
        id: 3,
        upKindNm : '토끼',
        neuterYn : '예',
        sexCd: '암컷',
        imgUrl: userImage
      },
      {
        id: 4,
        upKindNm : '토끼',
        neuterYn : '예',
        sexCd: '암컷',
        imgUrl: userImage
      }
    ];
    setPets(dummyPets);
  }, []);

  return (
      <section className="lost-animal-section">
        <h2 className="section-title">실종 동물 리스트</h2>
        <div className="card-container">
          {pets.map(pet => (
              <PetCard key={pet.id} pet={pet} type={"lostAnimal"} />
          ))}
        </div>
      </section>
  );
}

export default LostAnimalList;