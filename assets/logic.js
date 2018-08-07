var GifTastic = {
    btnArray : ["rick and morty", "futurama", "south park", "american dad", "family guy", "bugs bunny"],
    selected : "",
    popBtns : function() {
        for(var i=0; i< this.btnArray.length;i++){
        var newBtn = $('<button>');
        newBtn.attr('type','button')
        .attr('class','btn btn-info')
        .attr('data-value', this.btnArray[i])
        .text(this.btnArray[i]);
        $('#buttons-area').append(newBtn);
            }},
        };

GifTastic.popBtns();

$('.btn').on('click', function(){
    $('#images-area').empty();
    console.log($(this).attr('data-value'));
    var selected = $(this).attr('data-value')
$.ajax({
    url: "https://api.giphy.com/v1/gifs/search?api_key=iiSvA3Jf2Uwi2AvE36ypagPMCAQWWu9N&q="+ selected +"&limit=10&offset=0&rating=PG&lang=en",
    method: "GET",
    
}).then(function (response) {
    console.log(response);
    for (var c = 0; c < response.data.length; c++) {
        var newCard = $('<div>');
        newCard.attr('class', 'card')
        .attr('style','float:left; width: 18rem;');

        var cardImg = $('<img>');
        cardImg.attr('class','card-img-top ')
        .attr('src', response.data[c].images.original_still.url)
        .attr('alt', response.data[c].title)
        .attr('style','height:200px');

        var cardBody= $('<div>');
        cardBody.attr('class', 'card-body');

        var ratingDiv = $('<h5>');
        var rating = response.data[c].rating;
        ratingDiv.attr('class','card-title')
        .attr('id','rating')
        .text(rating);
        
        newCard.append(cardImg,cardBody);
        cardBody.append(ratingDiv);

        $("#images-area").append(newCard);
    }
})
});