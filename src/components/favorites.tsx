/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocalStorage } from '../helpers/useLocalStorage';
import { Game } from '../types/game';
import { Card } from './card';
import { Header } from './header';
import { Pagination } from './pagination';

type Props = {
  games: Game[];
  setGames: (games: Game[]) => void;
  visibleGames: Game[];
  setVisibleGames: (games: Game[]) => void;
  favorites: Game[],
  saveFav: (value: Game[]) => void,
  setSortBy: (sort: string) => void;
};

export const Favorites: React.FC<Props> = ({
  games, 
  setGames, 
  setVisibleGames, 
  visibleGames,
  favorites,
  saveFav,
  setSortBy,
}) => {
  return (
    <>
       <Header
          games={games}
          setGames={setGames}
          setVisibleGames={setVisibleGames}
          setSortBy={setSortBy}
        />

      <div className="container">
        {favorites.map(game => (
          <Card
            key={game.title}
            game={game}
            favorites={favorites}
            saveFav={saveFav}
          />
        ))}
      </div>

      {!favorites.length && (
        <div className='empty'>
          Your list of liked games is empty
        </div>
      )}
    </>
  );
};