// import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Game } from '../types/game';

type Props = {
  games: Game[];
  setGames: (games: Game[]) => void;
  setVisibleGames: (games: Game[]) => void;
  setSortBy: (sort: string) => void;
};

export const Header : React.FC<Props> = ({ games, setGames, setVisibleGames, setSortBy }) => {
const [query, setQuery] = useState('');
const queryNormalized = query.toLowerCase();

const handleChangeQuery = (event:React.ChangeEvent<HTMLInputElement>) => {
  setQuery(event.target.value);
};

const foundedGames = games.filter(game => {
  const title = game.title.toLowerCase().includes(queryNormalized);

  return title;
});


useEffect(() => {
  setVisibleGames(foundedGames);
}, [query]);

return (
  <header className="header">
    <Link to="/" className="header__logo" />

    <form
      className="form"
    >
        <input
          type="text"
          placeholder="Enter an app name..."
          className="form__input"
          onChange={handleChangeQuery}
        />

        <button
          type="button"
          className="form__button"
        >
        </button>
    </form>

    <button className="header__ordner">
    </button>

    <div className="header__select">
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value={'price'}>Price</option>
        <option value={'date'}>Publish Date</option>
      </select>
    </div>

    <nav className="header__nav">
      <Link
        to="/"
        className="header__link"
      >Search</Link>
      <Link to="/favorites" className="header__link">Like list</Link>
    </nav>
  </header>
);
};
