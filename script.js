var requestUrl = 'https://imdb-api.com/API/AdvancedSearch/k_ct2en8fp?title_type=feature&genres=action&countries=us&moviemeter=4000,7000'
var horror = document.querySelector("#horror")

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


horror.addEventListener('click',function(){
    console.log("ive been clicked");
})