import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Adoption from "./pages/Adoption.jsx";
import LostAnimal from "./pages/LostAnimal.jsx";
import MainPage from "./pages/MainPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import AdoptionDetail from "./pages/AdoptionDetail.jsx";
import LostAnimalDetail from "./pages/LostAnimalDetail.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/main" replace />} />
            <Route path="main" element={<MainPage />} />
            <Route path="adoption" element={<Adoption />} />
            <Route path="adoption/detail/:id" element={<AdoptionDetail />} />
            <Route path="lostAnimal" element={<LostAnimal />} />
            <Route path="lostAnimal/detail/:id" element={<LostAnimalDetail />} />
            <Route path="myPage" element={<MyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
