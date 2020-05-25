import { data } from './dataBase/datamovies.js';

let dataFilms = data;

//console.log(data);

let card = document.querySelector('#films');

function draw(list){
  card.innerHTML= '';
  list.forEach(movie => {
    let selection = document.createElement('movieSelected')
    selection.classList.add("movieCard")
    selection.innerHTML = 
  
      `<div class="main-card">
      <p>${movie.year}</p>
      <p>${movie.director}</p>
      <div>`
  
    card.appendChild(selection)
  })
}


let buttonDirector = document.querySelector('#director');
let buttonYear = document.querySelector('#year');

buttonDirector.addEventListener('click', function (e) {
    e.preventDefault();
    let resultDirector = data.filter(data => data.director === "Martin Scorsese");
    console.log(resultDirector);
    draw(resultDirector)
});

buttonYear.addEventListener('click', function (e) {
    e.preventDefault();
    let resultYear = data.filter(data => data.year === 1997);
    draw(resultYear)
    console.log(resultYear);
});






//console.log(year);













/* console.log(data()); */