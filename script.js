const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2471040ec8e6c895674cee16c735a208&page=1';
const IMG_PATH= 'https://image.tmdb.org/t/p/w1280'
//Search for a movie and get a response//
const SEARCHAPI='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2471040ec8e6c895674cee16c735a208&query="'


const main = document.getElementById("section");
const form = document.getElementById('form');
const search = document.getElementById('query');

function returnMovies(url) {
  fetch(url).then(res => res.json())
  .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
      const div = document.createElement('div')
    })
  }
}