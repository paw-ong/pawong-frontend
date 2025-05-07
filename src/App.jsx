import React, { useContext } from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Adoption from "./pages/Adoption.jsx";
import LostAnimal from "./pages/LostAnimal.jsx";
import MainPage from "./pages/MainPage.jsx";
import Login from "./pages/Login.jsx";
import MyPage from "./pages/MyPage.jsx";
import AdoptionDetail from "./pages/AdoptionDetail.jsx";
import LostAnimalDetail from "./pages/LostAnimalDetail.jsx";
import OAuthRedirectHandler from "./components/auth/OAuthRedirectHandler.jsx";
import AdditionalInfo from "./pages/AdditionalInfo.jsx";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/main" replace />} />
      <Route path="main" element={<MainPage />} />
      <Route path="adoptions" element={<Adoption />} />
      <Route path="adoptions/:id" element={<AdoptionDetail />} />
      <Route path="lostAnimal" element={<LostAnimal />} />
      <Route path="lostAnimal/detail/:id" element={<LostAnimalDetail />} />
      <Route path="oauth2/redirect" element={<OAuthRedirectHandler />} />
      <Route path="login" element={<Login />} />
      <Route
          path="myPage"
          element={user ? <MyPage /> : <Navigate to="/login" replace />}
        />
      <Route path="signup/additional-info" element={<AdditionalInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
