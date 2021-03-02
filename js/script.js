$(function(){
    var pokeUrl = "https://pokeapi.co/api/v2/generation/1";
    var pokemonByNamae = "https://pokeapi.co/api/v2/pokemon/";

    $.getJSON(pokeUrl).done(function(data){
        console.log(data);
        $("#success").append("Fetch pokemon success").css("color", "green");
        $.each(data.pokemon_species, function(index, pokemon){
            var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
           
            var par = $("<p>").html("pokemon species no " + (index + 1) + " is ").append(link);
            par.appendTo("#pokemon");

            // click link to get details
            link.click(function(event){
                $.getJSON(pokemonByNamae + pokemon.name)
                    .done(function(details){
                        console.log(details);
                        var pokemonDiv = $("#pokemon-details");
                        pokemonDiv.empty();
                        pokemonDiv.append("<h2>" + name + "</h2>");
                        pokemonDiv.append($("<img>").attr("src", details.sprites.front_default));
                        pokemonDiv.append($("<img>").attr("src", details.sprites.front_shiny));
                        pokemonDiv.append($("<img>").attr("src", details.sprites.back_default));
                        pokemonDiv.append($("<img>").attr("src", details.sprites.back_shiny));
                    })
                    .fail(function(){
                        $("#details-error").append("Unable to find details !").css({
                            "color": "red",
                            "font-size": "20px"
                        });
                    });
                event.preventDefault();
            });

        });
    }).fail(function(){
        console.log("Poke api failed to load");
      //  $("#error").append("Cannot fetch pokemon !").css("color", "red").css("font-size", "25px");
        $("#error").append("Cannot fetch pokemon !").css({
            "color": "red",
            "font-size": "25px"
        });
    }).always(function(){
        console.log("Pokemon is awesome");
    });

});