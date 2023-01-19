import { Detail } from "../types/detail";
import { Game } from "../types/game";

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c9a479b8cmshbcb4a21ac62d644p132b30jsnf8be955d4f4d',
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
	}
};

fetch('https://steam2.p.rapidapi.com/search/Counter/page/1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

fetch('https://steam2.p.rapidapi.com/appDetail/730', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  // export function getApps() {
  //   return fetch('https://steam2.p.rapidapi.com/search/Counter/page/1', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));  
  // }

  // export function getAll(): Promise<Good[]> {
  //   return fetch(API_URL)
  //     .then(response => response.json());
  // }
  
  export function getApps(): Promise<Game[]> {
    return fetch('https://steam2.p.rapidapi.com/search/Counter/page/1', options)
      .then(response => response.json())
      // .then(response => console.log(response))
      // .catch(err => console.error(err));  
  }

  // export function getDetails(): Promise<Detail[]> {
  //   return fetch(`https://steam2.p.rapidapi.com/appDetail/${game.id}`, options)
  //     .then(response => response.json())
  // }

  // export function getByQuery(): Promise<Game[]> {
  //   return fetch('https://steam2.p.rapidapi.com/search/Counter/page/1', options)
  //     .then(response => response.json())
  //     // .then(response => console.log(response))
  //     // .catch(err => console.error(err));  
  // }

  // fetch(`https://your-api-url.com/search?q=${debouncedQuery}`, options);

  