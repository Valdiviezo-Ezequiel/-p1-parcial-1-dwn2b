'uso estricto' ;

/*
* Valdiviezo Ezequiel
*/

// Ejemplo de la estructura de una discoteca:
// dejar discoteca = {
// Nombre: 'El lado oscuro de la Programación',
// Autor: 'Los Programadores Anónimos',
// Codigo: 1,
// Pistas: [
// {
// Nombre: 'Esa cajita loca llamada variablecita',
// Duración: 200,
// },
// {
// Nombre: 'Nunca quise ser un NaN',
// Duración: 180,
// },
// {
// Nombre: 'No quiero programar',
// Duración: 90,
// },
// {
// Nombre: 'Bajo presion',
// Duración: 240,
// },
// {
// Nombre: 'La odisea de las variables privadas',
// Duración: 120,
// },
// {
// Nombre: 'Sr. Programador',
// Duración: 720,
// },
// ],
// };


// Discos:
let ArregloDeDiscos = [];

function validacionesString(cadena) {
    if (cadena != null){
        cadena = cadena.trim();
    }
    
    if (cadena == "" || cadena == null || cadena == undefined){
        alert("Algo salio mal, por favor volver a ingresar el dato")
        return true;
    }
    return false; 
}

function validarCodigo(codigo) {
    let flag = false;
    if (ArregloDeDiscos.length > 0){
        for (let disco of ArregloDeDiscos) {
            if (disco.id == codigo){
                alert("ID repetido, por favor ingrese otro");
                flag = true;
            }
        }
    }
    if (codigo <= 0 || codigo > 999 || isNaN(codigo) || codigo == ""){
        alert("Su ID es invalido, ingrese otro por favor")
        flag = true;
    }
    return flag;
}

function validacionDuracion(duracion){
    let flag = false
    debugger
    
    if (duracion < 0 || duracion > 7200 || isNaN(duracion)){
        alert("La duración es invalida, debe estar entre 0 y 7200 segundos")
        flag = true;
    }
    return flag;
}


// Función Cargar:
const Cargar = () => {
    
    let discoNuevo ={};

    do{
        discoNuevo.nombre = prompt("ingrese el nombre del disco");
    }while(validacionesString(discoNuevo.nombre));

    do{
        discoNuevo.banda  = prompt("ingrese la banda del disco");
    }while(validacionesString(discoNuevo.banda));

    do{
        discoNuevo.id = parseInt(prompt("ingrese el codigo del disco")); 
    }while(validarCodigo(discoNuevo.id));
    
    discoNuevo.pistas = [];
    
    do{
        let pistasDelDisco = {}; 

        do{
            pistasDelDisco.nombreCancion = prompt("Ingrese el nombre de la cancion");
        }while(validacionesString(pistasDelDisco.nombreCancion)); 

        do {
            pistasDelDisco.duracion = parseInt(prompt("Ingrse la duracion de la cancion"));
        } while (validacionDuracion(pistasDelDisco.duracion));

        discoNuevo.pistas.push(pistasDelDisco);

    }while (confirm("Desea agregar más canciones?"));

    ArregloDeDiscos.push(discoNuevo);
};

// Función Mostrar:
const Mostrar = () => {

let infoDiscos = document.getElementById ('cantidadDiscos');
infoDiscos.innerHTML = `Cantidad de discos: ${ArregloDeDiscos.length}</div>`;


let contenido = document.getElementById('info');
contenido.innerHTML = "";
let html = '';
for(let discoNuevo of ArregloDeDiscos) {
    let pista = '';
    for(let pistaNueva of discoNuevo.pistas) {
        pista += `<p> Nombre de la canción: ${pistaNueva.nombreCancion}</p>`
        if (pistaNueva.duracion > 180){
            pista += `<p> Duracion de la canción: <span class="resaltar">${pistaNueva.duracion}</span></p>`
        }else{
            pista += `<p> Duracion de la canción: ${pistaNueva.duracion}</p>`
        }
    }
    html += '    <div class="disco">';
    html += '          <div class="discoCodigo">';
    html += `              Código: ${discoNuevo.id}`;
    html += '          </div>';
    html += '\n             <div class="img">';
    html += '\n                 <img src="music.png" alt="">';
    html += '\n             </div>';
    html += '        <div class="discoCancion">';
    html += '            <div class="cancionNombre">';
    html += `                <h3>Disco: ${discoNuevo.nombre}</h3>`;
    html += '            </div>';
    html += '            <div class="bandaNombre">';   
    html += `                <h4>Banda: ${discoNuevo.banda}</h4>`;
    html += '            </div>';
    html += '            <div class="bandaPista">';   
    html += `                <h4>${pista}</h4>`;
    html += '            </div>';
    html += '        </div>';
    html += '    </div>';

}
contenido.innerHTML = html;
}
