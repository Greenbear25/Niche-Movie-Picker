const title = document.querySelector("#movie-title");
const title2 = document.querySelector("#movie-title2");
const title3 = document.querySelector("#movie-title3");
const title4 = document.querySelector("#movie-title4");
const descript = document.querySelector("#movie-disc");
const descript2 = document.querySelector("#movie-disc2");
const descript3 = document.querySelector("#movie-disc3");
const descript4 = document.querySelector("#movie-disc4");
const poster = document.querySelector("#movie-img");
const poster2 = document.querySelector("#movie-img2");
const poster3 = document.querySelector("#movie-img3");
const poster4 = document.querySelector("#movie-img4");


console.log(sessionStorage)

var genre = sessionStorage.getItem('genre');
console.log(genre)

var requestUrl = 'https://imdb-api.com/API/AdvancedSearch/k_ct2en8fp?title_type=feature&genres=' + genre + '&countries=us&moviemeter=10000,11000';

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

function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
console.log(random_item(items));

var renderData = function(data){
    var mTitle = data.results[random_item(items)].title
    var mTitle2 = data.results[random_item(items)].title
    var mTitle3 = data.results[random_item(items)].title
    var mTitle4 = data.results[random_item(items)].title
    var mPlot = data.results[random_item(items)].plot
    var mPlot2 = data.results[random_item(items)].plot
    var mPlot3 = data.results[random_item(items)].plot
    var mPlot4 = data.results[random_item(items)].plot
    title.innerHTML = mTitle
    title2.innerHTML = mTitle2
    title3.innerHTML = mTitle3
    title4.innerHTML = mTitle4
    descript.innerHTML = mPlot
    descript2.innerHTML = mPlot2
    descript3.innerHTML = mPlot3
    descript4.innerHTML = mPlot4
}

apiCall();


// make a loop to grab the first 4 movies
// insert data into respective fields on chart
// optional, make streaming links display in a pop up window ontop of the movie poster


