const title = document.querySelector("#movie-title")
const descript = document.querySelector("#movie-disc")
const poster = document.querySelector("#movie-img")

// console.log(sessionStorage)

var genre = sessionStorage.getItem('genre');
// console.log(genre)

function getRecc(){
    var requestUrl = 'https://imdb-api.com/API/AdvancedSearch/k_ct2en8fp?title_type=feature&genres=' + genre + '&countries=us&moviemeter=10000,11000';
    if(genre === 'comedy'){
        
    }
}



// get function to work
// 


