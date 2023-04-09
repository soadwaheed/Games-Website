import {Ui} from './ui.js';
export class Details
{
    constructor(gId)
    {
        this.ui=new Ui();
        this.getDetails(gId);
        btnClose.addEventListener('click',function(){
            document.querySelector('.details').style.display='none';
            document.querySelector('.home').style.display='block';
        })
    }
    async getDetails(gameId) 
    {
        document.querySelector('.loading').style.display = 'flex';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e4bf061c94msh2ecdc8488885021p1406fbjsne165c3044ceb',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        const finalResponse = await apiResponse.json();
        console.log(finalResponse);
        this.ui.displayDetails(finalResponse);
        document.querySelector('.loading').style.display = 'none';
    }
}