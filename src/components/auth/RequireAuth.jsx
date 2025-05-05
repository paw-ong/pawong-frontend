// src/components/auth/RequireAuth.jsx
import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import client from '../../api/client'

export default function RequireAuth() {
  const navigate = useNavigate()

  useEffect(() => {
    client.get('/auth/me')
      .then(() => {
        // 인증·상태 검사 통과 → 그냥 렌더링
        console.log('인증 통과')
        console.log(client.defaults.headers.common['Authorization'])
      })
      .catch(err => {
        const { status, data } = err.response || {}
        if (status === 401 && data.code === 'NEED_ADDITIONAL_INFO') {
          navigate('/signup/additional-info')
        } else {
          navigate('/login')
        }
      })
  }, [navigate])

  return <Outlet />
}
