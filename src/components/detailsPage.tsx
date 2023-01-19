// /* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useLocalStorage } from '../helpers/useLocalStorage';
import { Game } from '../types/game';
import { Detail } from '../types/detail';
import { Card } from './card';
import { Header } from './header';
import { Pagination } from './pagination';
import { options } from '../api/data';

type Props = {
  games: Game[];
  setGames: (games: Game[]) => void;
  setVisibleGames: (games: Game[]) => void;
  setSortBy: (sort: string) => void;
};

export const ProductDetailsPage: React.FC<Props> = ({
  games, 
  setGames, 
  setVisibleGames, 
  setSortBy,
}) => {
  const { slug } = useParams();
  const decodedSlug = slug ? decodeURIComponent(slug) : undefined;
  const [details, setDetails] = useState<Detail[]>([]);
  const [currentGame, setCurrentGame] = useState<Game>();

  // useEffect(() => {
  //   if (slug) {
  //     const game = games.find(item => item.title === decodedSlug);
  //     if (game) {
  //       fetch(`https://steam2.p.rapidapi.com/appDetail/${game.appId}`, options)
  //         .then(response => response.json())
  //         .then(appDetailsFromServer => {
  //           setDetails(appDetailsFromServer);
  //           setCurrentGame(game);
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //     }
  //   }
  // }, [slug, games, currentGame]);
  // console.log(details)

  return (
    <>
      <Header
        games={games}
        setGames={setGames}
        setVisibleGames={setVisibleGames}
        setSortBy={setSortBy}
      />

      {currentGame && (
        <div className="container">
          <div>sjjkhdfj</div>
          <img className='card__img' src={details[0].imgUrl} alt={details[0].title} />

          <img className='card__img' src={details[0].imgUrl} alt={details[0].title} />
          <h2 className="card__title">{details[0].title}</h2>
          <p className="card__description">{details[0].description}</p>
        </div>
      )}
    </>
  );
};
