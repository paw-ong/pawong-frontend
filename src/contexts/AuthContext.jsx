// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import client from '../api/client'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // isRegistered 은 “추가 정보 입력까지 완료되어 백엔드에 ACTIVE 상태로 저장된 회원” 인지를 나타냄
  const [isRegistered, setIsRegistered] = useState(false) 
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    // 앱 시작 시 토큰 있으면 로컬 스토리지에 저장
    const token = localStorage.getItem('userToken')

    // 가입 완료시 /auth/me 호출해서 user 초기화
    if (token && isRegistered) {
      setLoading(true)
      client.get('/user/me')
        .then(res => {
          setUser(res.data)
          setIsRegistered(res.data.status === 'ACTIVE')
        })
        .catch(() => {
          localStorage.removeItem('userToken')
          localStorage.removeItem('status')
          setUser(null)
          setIsRegistered(false)
        })
        .finally(() => setLoading(false))
      } else {
        setLoading(false)
      }
    }, [isRegistered])

    // 로그인 핸들러: 토큰 받은 직후 status 가 ACTIVE 이면 바로 가입 완료
    const login = async (token, statusFromQuery) => {
        localStorage.setItem('userToken', token)
        const status = statusFromQuery || (user && user.status)

        if (token && status === 'ACTIVE') {
          await client.get('/user/me')
          .then(res => {
            setUser(res.data)
            setIsRegistered(true)
          })
          .catch(() => {
            console.log('login 호출 오류')
            localStorage.removeItem('userToken')
            localStorage.removeItem('status')
          })
        }

        setLoading(true)
      }
    
    // 로그아웃 핸들러
    const logout = () => {
        localStorage.removeItem('userToken')
        localStorage.removeItem('status')
        setUser(null)
        setIsRegistered(false)
        navigate('/login')
    }

    // 로그인, 추가정보, OAuth 리다이렉트 페이지는 스킵
    const publicPaths = [
        '/main',
        '/login',
        '/signup/additional-info',
        '/oauth2/redirect'
    ]
    useEffect(() => {
        if (!loading && !publicPaths.includes(pathname) && !user) {
            navigate('/login')
        }
    }, [loading, pathname, isRegistered, user, navigate])
//   if (loading) return <div>로딩 중…</div>
  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoggedIn: Boolean(user),
      login, 
      logout 
      }}>
      {children}
    </AuthContext.Provider>
  )
}
