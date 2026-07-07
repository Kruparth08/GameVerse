import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ExploreGamesPage from "../pages/ExploreGamesPage";
import GameDetailsPage from "../pages/GameDetailsPage";
import TournamentsPage from "../pages/TournamentsPage";
import TournamentDetailsPage from "../pages/TournamentDetailsPage";
import ProfilePage from "../pages/ProfilePage";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExploreGamesPage />} />
          <Route path="/games/:id" element={<GameDetailsPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/tournaments/:id" element={<TournamentDetailsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;