import React, { useState } from "react";
import AddressModal from "./AddressModal";
import PrimaryButton from "../common/PrimaryButton";
import "./AdoptionSearchBar.css";

const KIND_MAP = [
  { label: "개", value: "DOG" },
  { label: "고양이", value: "CAT" },
  { label: "기타", value: "ETC" },
];
const SEX_MAP = [
  { label: "전체", value: "ALL" },
  { label: "암컷", value: "F" },
  { label: "수컷", value: "M" },
];
const NEUTER_MAP = [
  { label: "전체", value: "ALL" },
  { label: "함", value: "Y" },
  { label: "안함", value: "N" },
];

function AdoptionSearchBar({ onSearch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKinds, setSelectedKinds] = useState([]); // ["DOG", ...]
  const [sex, setSex] = useState("ALL");
  const [neuter, setNeuter] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  // 체크박스 핸들러
  const handleKindChange = (kind) => {
    setSelectedKinds((prev) =>
      prev.includes(kind)
        ? prev.filter((k) => k !== kind)
        : [...prev, kind]
    );
  };

  // 검색 버튼 클릭 시
  const handleSearch = () => {
    if (selectedKinds.length === 0) {
      alert("품종을 한 개 이상 선택해주세요.");
      return;
    }
    onSearch({
      selectedKinds,
      sex,
      neuter,
      searchTerm,
    });
  };

  return (
    <div className="adoption-search-bar-wrapper">
      <div className="adoption-search-bar">
        <div className="filter-row">
          <div className="filter-group">
            <label className="filter-label">품종</label>
            {KIND_MAP.map((k) => (
              <label key={k.value}>
                <input
                  type="checkbox"
                  checked={selectedKinds.includes(k.value)}
                  onChange={() => handleKindChange(k.value)}
                />
                {k.label}
              </label>
            ))}
          </div>
          <div className="filter-group">
            <label className="filter-label">성별</label>
            <select value={sex} onChange={e => setSex(e.target.value)}>
              {SEX_MAP.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">중성화여부</label>
            <select value={neuter} onChange={e => setNeuter(e.target.value)}>
              {NEUTER_MAP.map((n) => (
                <option key={n.value} value={n.value}>{n.label}</option>
              ))}
            </select>
          </div>
          <PrimaryButton onClick={() => setIsModalOpen(true)}>지역조건추가</PrimaryButton>
        </div>
        <div className="search-row">
          <input
            className="search-input"
            type="text"
            placeholder="포옹이 필요한 친구를 찾아보세요!"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <PrimaryButton onClick={handleSearch}>검색</PrimaryButton>
        </div>
      </div>
      {isModalOpen && (
        <AddressModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default AdoptionSearchBar; 