/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/*bron javascript hulp vriend Per Kampman*/

var zoekbutton = document.querySelector("#vergroot");
var zoekveld = document.querySelector("header");

function show() {
    zoekveld.classList.toggle('show-search');
}

zoekbutton.addEventListener('click', show);


var filter = document.querySelector('#filter');
var fens = document.querySelector('#fens2');


function showFilter() {

    if (fens.style.display == "none") {
        fens.style.display = "flex";
    } else {
        fens.style.display = "none";
    }
}
filter.addEventListener('click', showFilter);
