export class Ui
{
    displayGames(data) 
    {
        let cartona = ``;
        for (let i = 0; i < data.length; i++) {
            cartona += ` <div class="col-md-6 col-lg-4 col-xl-3 ">
        <div class="card bg-transparent h-100" id=${data[i].id}>
            <div class="card-body">
            <img class=" object-fit-cover w-100" src=${data[i].thumbnail}>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <h3 class="small">${data[i].title}</h3>
                    <span class="badge bg-primary p-2">Free</span>
                </div>
                <p class="card-text small text-center opacity-50">
                   ${data[i].short_description.split(" ", 8)}
                </p>
            </div>
            <footer class="card-footer small d-flex justify-content-between">
                <span class="badge b-color">${data[i].genre}</span>
                <span class="badge b-color">${data[i].platform}</span>
            </footer>
        </div>

    </div> `
        }
        document.querySelector('#games').innerHTML = cartona;
    }
    displayDetails(detail) 
    {
        let cartona = ``;
        cartona = `<div class="col-md-4">
        <img src=${detail.thumbnail} class="w-100" alt="">
    </div>
    <div class="col-md-8">
        <h3>Title: ${detail.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${detail.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${detail.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${detail.status}</span> </p>
        <p class="small">${detail.description}</p>
        <a class="btn btn-outline-warning text-white" target="_blank" href=${detail.game_url}>Show Game</a>
    </div>`
        document.querySelector('#show-detail').innerHTML = cartona;
    }
}