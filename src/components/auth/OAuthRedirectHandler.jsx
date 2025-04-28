import React, { useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const OAuthRedirectHandler = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    useEffect(() => {
        const token = searchParams.get('token');
        const error = searchParams.get('error');
        
        if (token) {
            login(token)
            .then(() => navigate('/main'))
            .catch(() => navigate('/login'))
        } else if (error) {
            alert(`로그인 실패: ${error}`);
            navigate('/login');    // 에러 있으면 로그인 페이지로 복귀
        } else {
            navigate('/login');
        }
    }, [searchParams, login, navigate]);

    return <div>로그인 처리 중...</div>;
};

export default OAuthRedirectHandler;
