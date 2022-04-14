const title = document.querySelector("#movie-title")
const descript = document.querySelector("#movie-disc")
const poster = document.querySelector("#movie-img")
var requestUrl = 'https://imdb-api.com/API/AdvancedSearch/k_ct2en8fp?title_type=feature&genres=action&countries=us&moviemeter=10000,11000'

$.ajax({
    url: requestUrl,
    method: 'GET',
}).then(function (response) {
    console.log('AJAX Response \n-------------');
    console.log(response); 
})

//function for getting horror movies
    //put data onto second page container
 

//function for getting comedy movies
    //put data onto second page container

//function for getting drama movies
    //put data onto second page container


