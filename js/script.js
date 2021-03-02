$(function(){
    var pokeUrl = "https://pokeapi.co/api/v2/generation/1";

    $.getJSON(pokeUrl).done(function(data){
        console.log(data);
    });

});