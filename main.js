let show = document.querySelector('body');
let memes = [
    'https://media.giphy.com/media/13EgsbsNCLHXJm/giphy.gif',
    'https://media1.tenor.com/images/a5d3994866cb32646db76489f0e9456f/tenor.gif?itemid=7356979',
    'https://media.giphy.com/media/5WB5fFs7wot2M/giphy.gif',
    'https://media0.giphy.com/media/B0s8lE4WnywXm/source.gif',
]
let conter = 0;

let img = document.createElement('img');
img.setAttribute('src', memes[conter])

let prox = document.createElement('h1');
let proxTexto = document.createTextNode('<');
prox.appendChild(proxTexto);

let volt = document.createElement('h1');
let voltTexto = document.createTextNode('>');
volt.appendChild(voltTexto);

function init() {
    console.log(show, img);
    show.appendChild(prox);
    show.appendChild(img);
    show.appendChild(volt);
}

prox.addEventListener('click', function() {
    if (conter > 0) {
        conter = conter -1
        img.setAttribute('src', memes[conter])
    }
    else { conter = 3}

})

volt.addEventListener('click', function() {
    if (conter < 3) {
        conter = conter +1
        img.setAttribute('src', memes[conter])
    } 
    else { conter = 0}
        

})
init();
