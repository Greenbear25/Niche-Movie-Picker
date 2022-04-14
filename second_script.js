const title = document.querySelector("#movie-title");
const descript = document.querySelector("#movie-disc");
const poster = document.querySelector("#movie-img");
const test = document.querySelector("#test");

console.log(sessionStorage)

var genre = sessionStorage.getItem('genre');
console.log(genre)

var requestUrl = 'https://imdb-api.com/API/AdvancedSearch/k_9vi9km43?title_type=feature&genres=' + genre + '&countries=us&moviemeter=10000,11000';

var movieData;

window.onload = function(){
    
    
      console.log(movieData);
      
}

var apiCall = function(){
    $.ajax({
        url: requestUrl,
        method: 'GET',
      }).then(function (response) {
        console.log('Ajax Reponse \n-------------');
        console.log(response);
        movieData = response
        renderData(response)
      });
}

var renderData = function(data){
    var mTitle = data.results[0].title
    title.innerHTML = mTitle
    console.log("data in render data", data);
    console.log(data.results[0].title)
}

apiCall();


// make a loop to grab the first 4 movies
// insert data into respective fields on chart
// optional, make streaming links display in a pop up window ontop of the movie poster


