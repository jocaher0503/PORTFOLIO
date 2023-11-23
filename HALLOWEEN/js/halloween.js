/******************************************************************/
/*                hoja de js de halloween.html                    */
/*                autor: Juan Carlos Ocaña HEredia                */
/*                version: 1.0                                    */
/*                fecha: noviembre 2023                           */
/*                ejercicio para portfolio (II)                   */
/******************************************************************/

/************************* BATS ****************************/

function showbats(bats){
    document.getElementById(bats).style.visibility="visible"; /* extrae (get) un elemento (bats) y cambia algo en su estilo (visibilidad) */
}
function hidebats(bats){
    document.getElementById(bats).style.visibility="hidden"; /* extrae (get) un elemento (bats) y cambia algo en su estilo (visibilidad) */
}
function soundbats(element){
    document.getElementById(element).play();
}
function silencebats(element){
    document.getElementById(element).pause();
}

/************************* CHUCKY ****************************/

function showchucky(chucky){
    document.getElementById(chucky).style.visibility="visible"; 
}
function hidechucky(chucky){
    document.getElementById(chucky).style.visibility="hidden";
}
function soundchucky(chucky){
    document.getElementById(chucky).play();
}
function silencechucky(chucky){
    document.getElementById(chucky).pause();
}

/************************* JASON ****************************/

function showjason(jason){
    document.getElementById(jason).style.visibility="visible"; 
}
function hidejason(jason){
    document.getElementById(jason).style.visibility="hidden";
}
function soundjason(jason){
    document.getElementById(jason).play();
}
function silencejason(jason){
    document.getElementById(jason).pause();
}