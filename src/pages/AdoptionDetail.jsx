import React from "react";
import {useParams} from "react-router-dom";

function AdoptionDetail() {
  const { id } = useParams();

  return (
      <h1>입양동물 상세정보(ID:{id}</h1>
  );
}

export default AdoptionDetail;
