// src/pages/MyPage.jsx
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import defaultUserImage from '../assets/images/user.jpg'

export default function MyPage() {
  const { user, logout } = useContext(AuthContext)

  return (
    <div style={styles.myPageContainer}>
      <div style={styles.profileCard}>
        <div style={styles.profileHeader}>
          <div style={styles.profileImgWrapper}>
            <img
              src={user?.profileImage || defaultUserImage}
              alt="프로필"
              style={styles.profileImg}
            />
          </div>
          <h2 style={styles.profileNickname}>
            {user?.nickname || '닉네임 없음'}
          </h2>
        </div>
        <p style={styles.profileInfo}><strong>지역:</strong> {user?.region || '-'}</p>
        <p style={styles.profileInfo}><strong>전화번호:</strong> {user?.tel || '-'}</p>
      </div>
      <button style={styles.logoutBtn} onClick={logout}>
        로그아웃
      </button>
    </div>
  )
}

const styles = {
  myPageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  profileImgWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginRight: '12px',
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  profileNickname: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: 0,
  },
  profileInfo: {
    margin: '6px 0',
    color: '#3E3232',
  },
  logoutBtn: {
    marginTop: '24px',
    padding: '8px 16px',
    fontSize: '0.9rem',
    borderRadius: '5px',
    backgroundColor: '#fafafa',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    backgroundColor: '#EAD8C0',
  }
}
