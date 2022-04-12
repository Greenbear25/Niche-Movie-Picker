var requestUrl = 

$.ajax({
    url: requestUrl,
    method: 'GET',
}).then(function (response){
    console.log('Ajax Response');
    console.log(response)
})
