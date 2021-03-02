$(function(){
    var pokeUrl = "https://pokeapi.co/api/v2/generation/1";
  //  var pokemonByNamae = "https://pokeapi.co/api/v2/pokemon/";

    $.getJSON(pokeUrl).done(function(data){
        console.log(data);
        $("#success").append("Fetch pokemon success").css("color", "green");
        $.each(data.pokemon_species, function(index, pokemon){
            var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            var par = $("<p>").html("pokemon species no " + (index + 1) + " is " + name);
            par.appendTo("#pokemon");
        });
    }).fail(function(){
        console.log("Poke api failed to load");
        $("#error").append("Cannot fetch pokemon !").css("color", "red").css("font-size", "25px");
    }).always(function(){
        console.log("Pokemon is awesome");
    });

});