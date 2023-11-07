/*****************************************************************/





function show(element){
    document.getElementById(element).style.visibility="visible"; /* extrae (get) un elemento (bats) y cambia algo en su estilo (visibilidad) */
}
function hide(element){
    document.getElementById(element).style.visibility="hidden"; /* extrae (get) un elemento (bats) y cambia algo en su estilo (visibilidad) */
}
function showface(element){
    document.getElementById(element).style.visibility="visible"; 
}
function hide(element){
    document.getElementById(element).style.visibility="hidden";
}
function sound(element){
    document.getElementById('batsound').play();
}
function silence(element){
    document.getElementById('batsound').pause();
}