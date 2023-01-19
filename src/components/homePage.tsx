import React, { useEffect, useState } from 'react';
import { Header } from './header';
import { Card } from './card';
import { Game } from '../types/game';
import { Pagination } from './pagination';

type Props = {
  games: Game[];
  setGames: (games: Game[]) => void;
  visibleGames: Game[];
  setVisibleGames: (games: Game[]) => void;
  favorites: Game[],
  saveFav: (value: Game[]) => void,
  sortBy: string,
  setSortBy: (sort: string) => void;
};

export const HomePage: React.FC<Props> = ({
  games, 
  setGames, 
  setVisibleGames, 
  visibleGames,
  favorites,
  saveFav,
  sortBy,
  setSortBy,
}) => {

  useEffect(() => {
    setGames(games.sort((a, b) => {
      if (sortBy === 'price') {
        if (a.price === "Free to Play" || a.price === "Free") {
          return -1;
        } else if (b.price === "Free to Play" || b.price === "Free") {
          return 1;
        } else if (a.price.includes("€")) {
          return parseFloat(a.price.replace(",",".").replace("€","")) - parseFloat(b.price.replace(",",".").replace("€",""));
        }
      } else if (sortBy === 'date') {
        return Date.parse(a.released) - Date.parse(b.released);
      }
      return 0;
    }));
  }, [games, sortBy]);

  

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4
  const startIndex = (currentPage-1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageGames = visibleGames.slice(startIndex, endIndex);


  return (
    <>
      <div className="homepage">
        <Header
          games={games}
          setGames={setGames}
          setVisibleGames={setVisibleGames}
          setSortBy={setSortBy}
        />

        <div className="container">
          {currentPageGames.map(game => (
            <Card
              key={game.title}
              game={game}
              favorites={favorites}
              saveFav={saveFav}
            />
          ))}
        </div>

          <Pagination
            totalPages={Math.ceil(games.length/itemsPerPage)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
      </div>
    </>
  )
}
