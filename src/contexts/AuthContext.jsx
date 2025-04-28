// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import client from '../api/client'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    // 앱 시작 시 토큰 있으면 /auth/me 호출해서 user 초기화
    const token = localStorage.getItem('userToken')
    if (token) {
        client.get('/user/me')
          .then(res => setUser(res.data))
          .catch(() => {
            localStorage.removeItem('userToken')
            setUser(null)
          })
          .finally(() => setLoading(false))
      } else {
        setLoading(false)
      }
    }, [])
    // 로그인 핸들러
    const login = async (token) => {
        localStorage.setItem('userToken', token)
        return client.get('/user/me')
            .then(res => {
                setUser(res.data)
                return res.data
            })
            .catch(err => {
                setUser(null)
                throw err
            })
      }
    
    // 로그아웃 핸들러
    const logout = () => {
        localStorage.removeItem('userToken')
        setUser(null)
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
    }, [loading, pathname, user, navigate])
//   if (loading) return <div>로딩 중…</div>
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
