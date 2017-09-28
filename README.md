# DancaChuva


Introdução

Rede Social é uma estrutura social composta por pessoas ou organizações, conectadas por um ou vários tipos de relações, que compartilham valores e objetivos comuns. 
Localização é o termo usado em geografia e áreas afins para designar a posição de algo em um espaço físico. 
Unindo estes dois conceitos tentamos mostrar aos utilizadores algo que deviam talvez dar mais valor que redes sociais: a realidade. Crendo que as pessoas hoje em dia se desligam demasiado do mundo focando-se em relações online, no mundo online e esquecendo-se um bocado do mundo físico tentamos com este projecto construir uma ponte que una estes dois mundos. Estivemos a pesquisar esta ideia e aparentemente já existe uma tentativa de inserir, de certo modo, esta filosofia no mundo. Existem pois aplicações que se baseiam na localização. Estas designam-se Location-Based Social Network (LBSN). 
LBSN para além de consistir na adição de um local na rede social para que as pessoas possam na sua estrutura social compartilhar informações, consiste também numa nova estrutura social composta por indivíduos interligados por uma interdependência entre estes e as suas localizações no mundo físico bem como o seu conteúdo tagado com localização. Além disso, esta interdependência não é apenas entre duas pessoas que possam estar no mesmo local ou compartilhar histórias semelhantes numa mesma localização, mas também que partilhem conhecimento, por exemplo, interesses comuns, comportamentos, actividades inferidas a partir da localização actual ou histórica do indíviduo e dos seus dados com tags de localização. 

Proposta da aplicação a desenvolver
De uma maneira resumida, o utilizador insere uma determinada cidade (mundial) e a aplicação irá detectar que condições climatéricas é que se encontram nesse momento nessa mesma cidade; associa o clima a um estilo musical (musica a passar de fundo); esse estilo musical por sua vez é associado com um gif (preferencialmente gatos) e por último a aplicação irá pesquisar por 5 pontos de maior interesse na cidade procurada. 
Será mostrado o local que queremos pesquisar/visitar, o clima que lá está para nos lembrarmos que a variação no clima é algo que existe, não só o calor abafado do nosso quarto provocado pelo imenso uso dos computadores, para além disso é-nos dado uma música, baseado nesse clima que nos ponha na disposição de sairmos para a rua, um gif motivador e por último mostrar-nos onde poderíamos então ir nesse local. 


Funcionalidades implementadas
- Visualização das condições meteorológicas da cidade pesquisada 
- Mostrar grafo com as condições meteorológicas das cidades mais próximas. 
- Apresentar e reproduzir a música correspondente às condições meteorológicas. 
- Visualização de um gif que esteja de acordo com as duas anteriores. 
- Mostrar 5 pontos de interesse da cidade pesquisada. 


Serviços utilizados
- OpenWeather Map 
- Geobytes 
- Spotify 
- Giphy 
- Foursquare 


Tecnologias a utilizar
- Layout e tratamento de dados: HTML, CSS, JavaScript, jQuery, Bootstrap e Data-Driven Documents 
- Software: Sublime Text 
- Browser utilizado: Chrome 


Métodos utilizados
OpenWeather Map: 
    By city name - Para obter as condições climatéricas de uma determinada cidade.
Geobytes: 
    Get Nearby Cities API - Para saber que cidades se encontram perto de uma determinada cidade
Spotify: 
    Search for an Item - Procurar todos os artistas, album, faixas ou playlist correspondeste à "keyword string"
    Get an Album - Para obter informação sobre um album.
Giphy: 
    gif by Search Endpoint - Procurar gifs por palavra ou frase.
Foursquare: 
    Get venues/explore - Obter lista de pontos de referência / locais recomendados perto de uma dada localização.



Manual de Utilizador
 
- Página Inicial: Fazer a pesquisa por uma cidade da escolha do utilizador 
 
- Página de resultado: Após a pesquisa é apresentado um gif consoante as condições climatéricas
da cidade pesquisada
 
- Página de resultado - Grafo: Se o utilizador pressionar o botão "Mostrar grafo", 
será exibido um grafo com as condições climatéricas mais próximas 
 

- Página de resultado - Pontos Interesse: Se o utilizador pressionar o botão "Mostrar Sugestões Turísticas", 
será exibido uma lista de cinco locais de interesse na cidade pesquisada 
 

- Página de resultado - Música: Se o utilizador pressionar o botão "Mostrar Música", 
serão exibidos 20 álbuns musicais correspondestes às condições meteorológicas da cidade pesquisada 


Mapeamento

-Se "light rain" 
       Género Musical = "Jazz" 
       Gif = "cats"
-Se "moderate rain" 
       Género Musical = "Contemporary Blues" 
       Gif = "blue cats"
-Se "heavy intensity rain" 
       Género Musical = "Pop Rock"
       Gif = "heavy cats"
-Se "very heavy rain" 
       Género Musical = "Acappella" 
       Gif = "cat sing"
-Se "extreme rain" 
       Género Musical = "African Jazz"
       Gif = "african cats"
-Se "freezing rain" 
       Género Musical = "Creative Orchestra"
       Gif = "orchestra cats"
-Se "light intensity shower rain" 
       Género Musical = "Environmental" 
       Gif = "cats outside"
-Se "shower rain" 
       Género Musical = "Techno" 
       Gif = "techno cats"
-Se "heavy intensity shower rain" 
       Género Musical = "Folk" 
       Gif = "cats dress"
-Se "ragged shower rain" 
       Género Musical = "Gabba" 
       Gif = "jumping cat"
-Se "clear sky" 
       Género Musical = "Gospel"
       Gif = "black cats" 
-Se "few clouds" 
       Género Musical = "Drum'n'bass"
       Gif = "scary cats"
-Se "scattered clouds" 
       Género Musical = "Trap" 
       Gif = "trap"
-Se "broken clouds" 
       Género Musical = "House" 
       Gif = "cats house"
-Se "overcast clouds" 
       Género Musical = "Electro" 
       Gif = "electro"
-Se "light snow" 
       Género Musical = "Future-House" 
       Gif = "future cat"
-Se "snow" 
       Género Musical = "Minimal"
       Gif = "mini cats" 
-Se "heavy snow" 
       Género Musical = "Dubstep"
       Gif = "dubstep cats"
-Se "sleet" 
       Género Musical = "Mambo"
       Gif = "italian cats"
-Se "shower sleet" 
       Género Musical = "Neo-Bop"
       Gif = "bop cat"
-Se "light rain and snow" 
       Género Musical = "Metal"
       Gif = "metal cats"
-Se "rain and snow" 
       Género Musical = "Piano"
       Gif = "cats piano" 
-Se "light shower snow" 
       Género Musical = "Ragga" 
       Gif = "ragga cats"
-Se "shower snow" 
       Género Musical = "Rock"
       Gif = "rocking cats"
-Se "heavy shower snow" 
       Género Musical = "Trance"
       Gif = "trance"
