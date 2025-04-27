import React from "react";
import './Footer.css';

function Footer() {
  return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-item">멋쟁이사자 백엔드 플러스 4기</div>
          <div className="footer-item">김성운, 유현석, 이용제, 최성연, 최현지</div>
          <div className="footer-item">
            <a href="https://github.com/paw-ong" target="_blank" rel="noopener noreferrer">
              포옹 깃허브
            </a>
          </div>
        </div>
      </footer>
  );
}

export default Footer;