import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { getApps } from './api/data';
import { HomePage } from './components/homePage';
import { Game } from './types/game';
import gamesFromServer from './api/data.json';
import { useLocalStorage } from './helpers/useLocalStorage';
import { setFips } from 'crypto';
import { Favorites } from './components/favorites';
import { ProductDetailsPage } from './components/detailsPage';

export const App = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [visibleGames, setVisibleGames] = useState([...games]);
  const [favorites, saveFav] = useLocalStorage('favorites', []);
  const [sortBy, setSortBy] = useState('price');

  const getAppsFromServer = async () => {
    try {
      const appsFromServer = await getApps();

      setGames(appsFromServer);
    } catch (Error) {

    }
  };

  useEffect(() => {
      // getAppsFromServer();
      setGames(gamesFromServer);
      setVisibleGames(gamesFromServer);
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <HomePage
          games={games}
          setGames={setGames} 
          visibleGames={visibleGames}
          setVisibleGames={setVisibleGames} 
          favorites={favorites}
          saveFav={saveFav}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />} 
      />

     <Route path="/:slug" element={
       <ProductDetailsPage
          games={games}
          setGames={setGames} 
          setVisibleGames={setVisibleGames}
          setSortBy={setSortBy}
        />}
      />
     <Route path="/favorites"element={
       <Favorites 
          games={games}
          setGames={setGames} 
          visibleGames={visibleGames}
          setVisibleGames={setVisibleGames}
          favorites={favorites}
          saveFav={saveFav}
          setSortBy={setSortBy}
        />}
       />
    </Routes>
  );
}

