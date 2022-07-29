//definimos la respuesta correcta
let correcto = "huevo";

//especificamos cuantas oportunidades tendra desde el inicio
let intentos = 3;

//damos la bienvenida
alert("Bienvenido(a),\nresuelve el siguiente acertijo para ganar.\nTendras " +intentos +" intentos.\nMucha Suerte!");

//
while (intentos > 0) {
    let respuesta = prompt("Acertijo:\nEstando roto es más útil que sin romperse. ¿Qué es?");
        //validamos si las variables respuesta y correcto son similares o erroneas
        if(respuesta == correcto){
            alert("CORRECTO!!\nLa respuesta es " +respuesta +"\nGracias por realizar este desafío.");
            break;
        } 
        //si es erronea se muestra el alert + los intentos restantes
         else if(respuesta != correcto){
                intentos -= 1;
                alert("Respuesta incorrecta :(\nIntentos restantes " + (intentos))
        } 

//cuando pierden se muestra la alerta
} if(intentos < 1){
        alert("Perdiste :( \nSe te agotaron los intentos, la respuesta correcta era " +correcto)
    }
