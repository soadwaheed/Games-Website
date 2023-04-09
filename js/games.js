import {Ui} from './ui.js';
import {Details} from './details.js';
import { eventCategory } from './index.js';
export class Game
{
    constructor()
    {
        this.getGames('mmorpg');
        this.ui=new Ui();
        let category=document.querySelectorAll('nav li a');
        for (let i = 0; i < category.length; i++) {
            category[i].addEventListener('click', function (e) {
                let dataCategory = e.target.getAttribute('game-category');
                document.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                eventCategory.getGames(dataCategory);
            })
        }
    }
    async getGames(gameCategory) 
    {
        document.querySelector('.loading').style.display = 'flex';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e4bf061c94msh2ecdc8488885021p1406fbjsne165c3044ceb',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameCategory}`, options);
        const finalResponse = await apiResponse.json();
        console.log(finalResponse);
        this.ui.displayGames(finalResponse);
        this.cardEvent();
        document.querySelector('.loading').style.display = 'none';
    }
    cardEvent() 
    {
        let cards = document.querySelectorAll('.card');
        for (let card of cards) {
            card.addEventListener('click', function () {
                let cardId = card.getAttribute('id');
                document.querySelector('.home').style.display = 'none';
                document.querySelector('.details').style.display = 'block';
                new Details(cardId);
            });
        }
    }
}

