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

var requestUrl = 'https://imdb-api.com/API/AdvancedSearch/k_9vi9km43?title_type=feature&genres=' + genre + '&countries=us&moviemeter=10000,11000';

var movieData;

window.onload = function(){
    
    
      console.log(movieData);
      
}

function shuffleArray(array) {
  let curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}


var apiCall = function(){
    $.ajax({
        url: requestUrl,
        method: 'GET',
      }).then(function (response) {
        console.log('Ajax Reponse \n-------------');
        console.log(response);
        response = shuffleArray(response);
        renderData(response)
      });
}

// function shuffleArray(array) {
//   let curId = array.length;
//   // There remain elements to shuffle
//   while (0 !== curId) {
//     // Pick a remaining element
//     let randId = Math.floor(Math.random() * curId);
//     curId -= 1;
//     // Swap it with the current element.
//     let tmp = array[curId];
//     array[curId] = array[randId];
//     array[randId] = tmp;
//   }
//   return array;
// }

var renderData = function(data){
    var mTitle = data.results[0].title
    var mTitle2 = data.results[1].title
    var mTitle3 = data.results[2].title
    var mTitle4 = data.results[3].title
    var mPlot = data.results[0].plot
    var mPlot2 = data.results[1].plot
    var mPlot3 = data.results[2].plot
    var mPlot4 = data.results[3].plot
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


