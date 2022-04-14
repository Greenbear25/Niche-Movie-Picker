const title = document.querySelector("#movie-title")
const descript = document.querySelector("#movie-disc")
const poster = document.querySelector("#movie-img")

// console.log(sessionStorage)

var genre = sessionStorage.getItem('genre');
// console.log(genre)

var requestUrl = 'https://imdb-api.com/API/AdvancedSearch/k_ct2en8fp?title_type=feature&genres=' + genre + '&countries=us&moviemeter=10000,11000';

window.onload = function(){
    
    $.ajax({
        url: requestUrl,
        method: 'GET',
      }).then(function (response) {
        console.log('Ajax Reponse \n-------------');
        console.log(response);
      });

    if(genre === 'comedy'){

    }
}



// get function to work
// 


