import React, { useState } from "react";
import AdoptionSearchBar from "../components/pet/AdoptionSearchBar";
import AdoptionResultList from "../components/pet/AdoptionResultList";

function Adoption() {
  const [searchParams, setSearchParams] = useState(null); // 검색 조건
  const [results, setResults] = useState([]); // 검색 결과
  const [loading, setLoading] = useState(false);

  // 검색 함수: AdoptionSearchBar에서 호출
  const handleSearch = async (params) => {
    setSearchParams(params);
    setLoading(true);
    try {
      const urlParams = new URLSearchParams();
      params.selectedKinds.forEach((kind) => urlParams.append("upKindCds", kind));
      if (params.sex === "ALL") {
        ["M", "F", "Q"].forEach((s) => urlParams.append("sexCd", s));
      } else {
        urlParams.append("sexCd", params.sex);
      }
      if (params.neuter === "ALL") {
        ["Y", "N", "U"].forEach((n) => urlParams.append("neuterYn", n));
      } else {
        urlParams.append("neuterYn", params.neuter);
      }
      if (params.searchTerm && params.searchTerm.trim()) {
        urlParams.append("searchTerm", params.searchTerm.trim());
      }
      const url = `http://localhost:8080/api/adoptions/search?${urlParams.toString()}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("검색 실패");
      const data = await res.json();
      setResults(data.adoptionSearchResponses || []); // adoptionSearchResponses 배열을 results로 설정
    } catch (e) {
      alert("검색 중 오류 발생");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AdoptionSearchBar onSearch={handleSearch} />
      <AdoptionResultList results={results} loading={loading} />
    </div>
  );
}

export default Adoption;