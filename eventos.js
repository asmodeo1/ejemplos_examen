

function click() {
    console.log("click");
}

function dblclick() {
    console.log("dblclick");
}

function mouseenter() {  // Cuando el ratón entra en un elemento
    console.log("mouseenter");
}

function mouseleave() {  // Cuando el ratón sale de un elemento
    console.log("mouseleave");
}

function mousemove() {  // Cuando el ratón se mueve por un elemento
    console.log("mousemove");
}

// Cuando se comienza a pulsar un botón del ratón y aún no se ha soltado
function mousedown() {  
    console.log("mousedown");
}

// Cuando se deja de pulsar un botón del ratón
function mouseup() {  
    console.log("mouseup");
}
// Cuando se pulsa una tecla y aún no se ha soltado
function keydown() {  
    console.log("keydown");
}
// Cuando se ha soltado una tecla pulsada
function keyup() {  
    console.log("keyup");
}
// Cuando se pulsa y suelta una tecla
// Obsoleto: se recomienda usar el evento input
function keypress() {  
    console.log("keypress");
}
function submit() {  // Cuando se va a enviar los datos del formulario
    console.log("submit");
}
function reset() {  // Cuando se borran los datos del formulario
    console.log("reset");
}

function focus() {  // Cuando obtiene el foco
    console.log("focus");
}

function blur() {  // Cuando pierde el foco
    console.log("blur");
}

// Cuando cambia el contenido de un input, select o textarea y pierde el foco
function change() {  
    console.log("change");
}

document.getElementById("texto").addEventListener("focus", focus);
document.getElementById("texto").addEventListener("blur", blur);
document.getElementById("texto").addEventListener("change", change);
document.getElementById("parrafo").addEventListener("click", click);
document.getElementById("parrafo").addEventListener("dblclick", dblclick);
document.getElementById("parrafo").addEventListener("mouseenter", mouseenter);
document.getElementById("parrafo").addEventListener("mouseleave", mouseleave);
document.getElementById("parrafo").addEventListener("mousemove", mousemove);
document.getElementById("parrafo").addEventListener("mousedown", mousedown);
document.getElementById("parrafo").addEventListener("mouseup", mouseup);
document.getElementById("texto").addEventListener("keydown", keydown);
document.getElementById("texto").addEventListener("keyup", keyup);
document.getElementById("texto").addEventListener("keypress", keypress);
document.getElementById("formulario").addEventListener("submit", submit);
document.getElementById("formulario").addEventListener("reset", reset);











