import React from "react";

function AdoptionResultList({ results, loading }) {
  if (loading) return <div style={{textAlign: 'center', margin: '32px 0'}}>검색 중...</div>;
  if (!results || results.length === 0) return <div style={{textAlign: 'center', margin: '32px 0'}}>검색 결과가 없습니다.</div>;

  return (
    <div style={{width: '100%', maxWidth: 1100, margin: '0 auto', padding: '0 16px'}}>
      <ul style={{listStyle: 'none', padding: 0}}>
        {results.map((item, idx) => (
          <li key={item.id || idx} style={{marginBottom: 16, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(167,146,119,0.08)', padding: 20}}>
            {/* 실제 데이터 구조에 맞게 아래를 수정하세요 */}
            <div><b>이름:</b> {item.name || '이름 없음'}</div>
            <div><b>품종:</b> {item.upKindCd || '-'}</div>
            <div><b>성별:</b> {item.sexCd || '-'}</div>
            <div><b>중성화:</b> {item.neuterYn || '-'}</div>
            {/* 필요시 더 많은 정보 추가 */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdoptionResultList; 