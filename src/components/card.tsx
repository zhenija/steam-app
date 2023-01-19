import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types/game';

type Props = {
  game: Game,
  favorites: Game[],
  saveFav: (value: Game[]) => void,
};

export const Card : React.FC<Props> = ({ game, favorites, saveFav }) => {
  const { title, imgUrl, released, price } = game;
  let isFavourite = false;

  if (game) {
    isFavourite = favorites.some((item: Game) => item.appId === game.appId);
  }

  return (
    <Link className="card" to={`/${game.title}`}> 
      <img
        className='card__img'
        src={imgUrl}
        alt={title}
      />

      <div className='card__title'>{title}</div>
      <div className='card__released'>{released}</div>
      <div className='card__block'>
        <div className='card__price'>{price}</div>
          <button
          type="button"
          className="card__button"
          onClick={(e) => {
            e.preventDefault();

            if (isFavourite) {
              const newFavorites = favorites.filter((item: Game) => item.appId !== game.appId);

              saveFav([...newFavorites]);
            } else {
              saveFav([...favorites, game]);
            }
          }}
        >
          {isFavourite
            ? (
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 28C15.8245 28.001 15.6506 27.9673 15.4881 27.901C15.3257 27.8346 15.1779 27.7369 15.0533 27.6133L4.69334 17.24C3.39382 15.9269 2.66489 14.1541 2.66489 12.3066C2.66489 10.4592 3.39382 8.68639 4.69334 7.37329C6.00302 6.06731 7.77711 5.33392 9.62667 5.33392C11.4762 5.33392 13.2503 6.06731 14.56 7.37329L16 8.81329L17.44 7.37329C18.7497 6.06731 20.5238 5.33392 22.3733 5.33392C24.2229 5.33392 25.997 6.06731 27.3067 7.37329C28.6062 8.68639 29.3351 10.4592 29.3351 12.3066C29.3351 14.1541 28.6062 15.9269 27.3067 17.24L16.9467 27.6133C16.8221 27.7369 16.6743 27.8346 16.5119 27.901C16.3494 27.9673 16.1755 28.001 16 28Z" fill="#DD1717"/>
              </svg>
            )
            : (
              <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M11.7124 1.79441C10.3497 0.57241 8.56366 -0.0692986 6.73479 0.00594202C4.90592 0.0811826 3.17867 0.867427 1.92088 2.19724C0.663089 3.52705 -0.025862 5.29536 0.000742834 7.12559C0.0273477 8.95581 0.767406 10.7033 2.06332 11.996L10.0572 19.9888C10.4963 20.4277 11.0916 20.6742 11.7124 20.6742C12.3332 20.6742 12.9286 20.4277 13.3676 19.9888L21.3615 11.996C22.6575 10.7033 23.3975 8.95581 23.4241 7.12559C23.4507 5.29536 22.7618 3.52705 21.504 2.19724C20.2462 0.867427 18.5189 0.0811826 16.6901 0.00594202C14.8612 -0.0692986 13.0752 0.57241 11.7124 1.79441ZM10.3405 3.71885L10.8848 4.262C11.1043 4.48145 11.402 4.60473 11.7124 4.60473C12.0228 4.60473 12.3205 4.48145 12.54 4.262L13.0844 3.71885C13.5163 3.27164 14.033 2.91493 14.6042 2.66953C15.1755 2.42414 15.7899 2.29497 16.4116 2.28957C17.0333 2.28416 17.6499 2.40263 18.2253 2.63807C18.8008 2.8735 19.3236 3.22117 19.7632 3.66081C20.2028 4.10045 20.5505 4.62324 20.786 5.19868C21.0214 5.77412 21.1399 6.39069 21.1345 7.01241C21.129 7.63412 20.9999 8.24854 20.7545 8.8198C20.5091 9.39106 20.1524 9.90773 19.7052 10.3397L11.7124 18.3336L3.71969 10.3397C2.86677 9.45657 2.39482 8.2738 2.40548 7.04611C2.41615 5.81841 2.90859 4.64403 3.77673 3.77589C4.64487 2.90774 5.81926 2.41531 7.04695 2.40464C8.27464 2.39397 9.45741 2.86592 10.3405 3.71885Z" fill="white"/>
              </svg>
            )}

        </button>
      </div>
    </Link>
  )
}
