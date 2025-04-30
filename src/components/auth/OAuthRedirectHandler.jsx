import React, { useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const OAuthRedirectHandler = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { login, setIsRegistered } = useContext(AuthContext);

    useEffect(() => {
        const token = searchParams.get('token');
        const status = searchParams.get('status');
        const error = searchParams.get('error');
        
        if (token) {
            login(token, status)
            .then(() => {
                if (status === 'ACTIVE') {
                    localStorage.setItem('status', status)
                    setIsRegistered(true)
                    navigate('/main')               // 이미 가입 완료된 경우
                  } else {
                    navigate('/signup/additional-info')  // 추가 정보 입력이 필요한 경우
                  }
            })
            .catch(() => {
                console.log('Error occurred while logging in')
                navigate('/main')
            })
        } else if (error) {
            console.log('Error occurred while logging in')
            alert(`로그인 실패: ${error}`);
            navigate('/login');    // 에러 있으면 로그인 페이지로 복귀
        } else {
            console.log('No token or error occurred')
            navigate('/login');
        }
    }, [searchParams, login, navigate]);

    return <div>로그인 처리 중...</div>;
};

export default OAuthRedirectHandler;
