var base_weather_url = "http://api.openweathermap.org/data/2.5/weather?";
var key_weather = "6bdaba136a64807bbeeab454b2104405";
var base_nearCity_url = "http://getnearbycities.geobytes.com/GetNearbyCities?callback=?&radius=100&limit=50&locationcode=";
var apiGiphy = "http://api.giphy.com/v1/gifs/search?"; //api giphy
var keyGiphy = "&api_key=dc6zaTOxFJmzC"; // key api giphy
var base_foursquare_url = "https://api.foursquare.com/v2/venues/search";
var client_id = "LO20ZLZ1WSA4R2WOH42TGWBGTZDU2R0IOSSVC1KW5ACWCEGT";
var client_secret = "QALMEVYQYSJEATMLA4A4ULITUE5YHAEUHMFZGPLKPBQF5KP0";

var mostraGraph = true;
var mostraFS = true;
var mostraSP = true;
var cities = [];
var liga = [];
var meteoVal = 0;

var querySpotify = "";
var queryGiphy = "";
var city = "";


$(function() {
    $("#search").click(procura);

    /* BOTAO MOSTRA GRAPH */
     $("#showGraph").click(function(){
        if(mostraGraph == true){
            $("#graph").css("display", "inline");
            $("#showGraph").html("Ocultar Grafo Interactivo");
            mostraGraph = false;
        }else{
            $("#graph").css("display", "none");
            $("#showGraph").html("Mostrar Grafo Interactivo");
            mostraGraph = true;
        }
     });

     /* BOTAO MOSTRA FOURSQUARE */
     $("#showFS").click(function(){
        if(mostraFS == true){
            $("#FourSquare").css("display", "inline");
            $("#showFS").html("Ocultar Sugestões Turisticas");
            mostraFS = false;
        }else{
            $("#FourSquare").css("display", "none");
            $("#showFS").html("Mostrar Sugestões Turisticas");
            mostraFS = true;
        }
     });

     /* BOTAO MOSTRA SPOTIFY */
     $("#showSpotify").click(function(){
        if(mostraSP == true){
            $("#titleSpot").css("display", "inline");
            $("#results").css("display", "inline");
            $("#showSpotify").html("Ocultar Músicas");
            mostraSP = false;
        }else{
            $("#titleSpot").css("display", "none");
            $("#results").css("display", "none");
            $("#showSpotify").html("Mostrar Músicas");
            mostraSP = true;
        }
     });
});


function procura(){
    $("#results").empty();
    $("#gif").empty();
    $("#FourSquare").empty();

    /* Iniciar botao mostra Graph */
    $("#showGraph").html("Mostrar Grafo Interactivo");
    $("#showGraph").css("display", "inline");
    
    /* Iniciar botao mostra FourSquare */
    $("#showFS").html("Mostrar Sugestões Turisticas");
    $("#showFS").css("display", "inline");
    
    /* Iniciar botao mostra Spotify */
    $("#showSpotify").html("Mostrar Músicas");
    $("#showSpotify").css("display", "inline");
    searchByCity();
}

function searchByCity(){
    city = $("#query").val();
    var pedido = "q=" + city;
     if(city.length > 0){
         $.getJSON(base_nearCity_url, pedido).done(function(nearCityResults){
            getCidadeInfo(nearCityResults);
        }).fail(function(nearCityResults){
            alert("Houve algum problema com a GeoBytes API.");
        });    

       
     } else {
       alert("Preencha o campo de pesquisa."); 
    }

}

function getCidadeInfo(data){
    var lastCI = false;
    for (var i = 0; i < data.length; i++) {
        getCidadeNome(data[i], lastCI);

        if(i == data.length -1){
            lastCI = true;
            getCidadeNome(data[i], lastCI);
        }
    }

}

function getCidadeNome(cidadeData, lastCI){
    var lastCN = lastCI;
    getWeather(cidadeData[1], lastCN);
}

function getWeather(cidade, lastCN){
    var lastW = lastCN;
    var pedido = "q=" + cidade + "&appid=" + key_weather;
    var valor, c;
    $.getJSON(base_weather_url, pedido).done(function(weatherResults){
        
        /* Para mostrar lista das cidades com a respectiva temperatura e descrição meteorologica */
        //$("#results").append("<p> "+ cidade + " Temperatura: " + weatherResults.main.temp + " Descrição: " +weatherResults.weather[0].description+"</p>");

        valor = mapWeather(weatherResults.weather[0].description);

        c = {name: cidade, meteo: valor};
        cities.push(c);


        if(lastW == true){
            draw();                         //DRAW GRAPH
            getImageGiphy(queryGiphy);      //RUN GIPHY REQUEST
            searchVenues();                 //RUN FOURSQUARE REQUEST
            cities = [];
        }

    }).fail(function(weatherResults){
        alert("Houve algum problema com a OpenWeather API.");
    });
}

function mapWeather(weather_desc){

    if(weather_desc === "light rain"){
        meteoVal = 1;
        querySpotify = "Jazz"; 
        queryGiphy = "cats";
    }else if(weather_desc === "moderate rain"){
        meteoVal = 2;
        querySpotify = "Contemporary Blues"; 
        queryGiphy = "blue cats";
    }else if(weather_desc === "heavy intensity rain"){
        meteoVal = 3;
        querySpotify = "Pop Rock"; 
        queryGiphy = "heavy cats";
    }else if(weather_desc === "very heavy rain"){
        meteoVal = 4;
        querySpotify = "Acappella"; 
        queryGiphy = "cat sing";
    }else if(weather_desc === "extreme rain"){
        meteoVal = 5;
        querySpotify = "African Jazz";
        queryGiphy = "african cats";
    }else if(weather_desc === "freezing rain"){
        meteoVal = 6;
        querySpotify = "Creative Orchestra";
        queryGiphy = "orchestra cats"; 
    }else if(weather_desc === "light intensity shower rain"){
        meteoVal = 7;
        querySpotify = "Environmental"; 
        queryGiphy = "cats outside";
    }else if(weather_desc === "shower rain"){
        meteoVal = 8;
        querySpotify = "Techno"; 
        queryGiphy = "techno cats";
    }else if(weather_desc === "heavy intensity shower rain"){
        meteoVal = 9;
        querySpotify = "Folk"; 
        queryGiphy = "cats dress";
    }else if(weather_desc === "ragged shower rain"){
        meteoVal = 10;
        querySpotify = "Gabba"; 
        queryGiphy = "jumping cat";
    }else if(weather_desc === "clear sky"){
        meteoVal = 11;
        querySpotify = "Gospel";
        queryGiphy = "black cats"; 
    }else if(weather_desc === "few clouds"){
        meteoVal = 12;
        querySpotify = "Drum'n'bass"; 
        queryGiphy = "scary cats";
    }else if(weather_desc === "scattered clouds"){
        meteoVal = 13;
        querySpotify = "Trap"; 
        queryGiphy = "trap";
    }else if(weather_desc === "broken clouds"){
        meteoVal = 14;
        querySpotify = "House"; 
        queryGiphy = "cats house";
    }else if(weather_desc === "overcast clouds"){
        meteoVal = 15;
        querySpotify = "Electro"; 
        queryGiphy = "electro";
    }else if(weather_desc === "light snow"){
        meteoVal = 16;
        querySpotify = "Future-House"; 
        queryGiphy = "future cat";
    }else if(weather_desc === "snow"){
        meteoVal = 17;
        querySpotify = "Minimal";
        queryGiphy = "mini cats"; 
    }else if(weather_desc === "heavy snow"){
        meteoVal = 18;
        querySpotify = "Dubstep";
        queryGiphy = "dubstep cats"; 
    }else if(weather_desc === "sleet"){
        meteoVal = 19;
        querySpotify = "Mambo"; 
        queryGiphy = "italian cats";
    }else if(weather_desc === "shower sleet"){
        meteoVal = 20;
        querySpotify = "Neo-Bop"; 
        queryGiphy = "bop cat";
    }else if(weather_desc === "light rain and snow"){
        meteoVal = 21;
        querySpotify = "Metal"; 
        queryGiphy = "metal cats";
    }else if(weather_desc === "rain and snow"){
        meteoVal = 22;
        querySpotify = "Piano";
        queryGiphy = "cats piano"; 
    }else if(weather_desc === "light shower snow"){
        meteoVal = 23;
        querySpotify = "Ragga"; 
        queryGiphy = "ragga cats";
    }else if(weather_desc === "shower snow"){
        meteoVal = 24;
        querySpotify = "Rock"; 
        queryGiphy = "rocking cats";
    }else if(weather_desc === "heavy shower snow"){
        meteoVal = 25;
        querySpotify = "Trance";
        queryGiphy = "trance"; 
    }else{
        meteoVal = 1;
    }
    
    return meteoVal;

}

/*    GIPHY      */

function getImageGiphy(q){
    var searchGiphy = "&q=" + q; //pesquisa giphy
    var urlGiphy = apiGiphy + keyGiphy + searchGiphy;
    var min = 0;
    var max = 10;
    var random = Math.floor(Math.random() * (max - min + 1) + min);

    $.getJSON(urlGiphy).done(function(giphyResults){
       // console.log(giphyResults);
        $("#gif").append("<img src =\" "+ giphyResults.data[random].images.original.url +"\" alt=\"gif\" >");
    }).fail(function(giphyResults){
        alert("Houve algum problema com a API GIPHY.");
    });
}

/*      FOURSQUARE       */
function searchVenues(){

        //var requestFood = "?client_id=" + client_id + "&client_secret=" + client_secret + "&near=" + city + "&section=" + "food" + "&v=20140806&m=foursquare";
        //var FQFoodRequest = base_foursquare_url + requestFood;

        var request = "?client_id=" + client_id + "&client_secret=" + client_secret + "&near=" + city + "&v=20140806&m=foursquare";
        var FQRequest = base_foursquare_url + request;
        $("#FourSquare").append("<h2 style=\"color: white\">Sugestões Turisticas</h2><br>");
        
        $.getJSON(FQRequest).done(function(cityResults){
           // console.log(cityResults);
            for(var i = 0; i < 10; i++){
                $("#FourSquare").append("<h4 style=\"color: white\">" + cityResults.response.venues[i].name + "</h4>");
            }

        }).fail(function(cityResults){
            alert("Houve algum problema com a FOURSQUARE API.");
        });

}


function draw(){

var width = $( window ).width(),
  height = 750;

var color = d3.scale.category20();

var force = d3.layout.force()
  .charge(-120)
  .linkDistance(100)
  .size([width, height]);

d3.select("#graph svg").remove(); 


var svg = d3.select("#graph").append("svg")
  .attr("width", width)
  .attr("height", height);

    force
        .nodes(cities)
        .start();


    var node = svg.selectAll(".node")
        .data(cities)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 20)
        .style("fill", function(d) { return color(d.meteo); })
        .call(force.drag);

    node.append("title")
        .text(function(d) { return d.name; });

    force.on("tick", function() {
      node.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    });

}




/*        SPOTIFY            */


var templateSource = document.getElementById('results-template').innerHTML,
    template = Handlebars.compile(templateSource),
    resultsPlaceholder = document.getElementById('results'),
    playingCssClass = 'playing',
    audioObject = null;

var fetchTracks = function (albumId, callback) {
    $.ajax({
        url: 'https://api.spotify.com/v1/albums/' + albumId,
        success: function (response) {
            callback(response);
        }
    });
};

var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = template(response);
        }
    });
};

results.addEventListener('click', function(e) {
    var target = e.target;
    if (target !== null && target.classList.contains('cover')) {
        if (target.classList.contains(playingCssClass)) {
            audioObject.pause();
        } else {
            if (audioObject) {
                audioObject.pause();
            }
            fetchTracks(target.getAttribute('data-album-id'), function(data) {            
                audioObject = new Audio(data.tracks.items[0].preview_url);
                audioObject.play();
                target.classList.add(playingCssClass);
                audioObject.addEventListener('ended', function() {
                    target.classList.remove(playingCssClass);
                });
                audioObject.addEventListener('pause', function() {
                    target.classList.remove(playingCssClass);
               });
            });
        }
    }
});


document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(querySpotify);
}, false);

