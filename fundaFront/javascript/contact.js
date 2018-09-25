


/*  Contador de palabras en tiempo real, para ver las palabras
    disponibles. Cuando quedan menos del 15% el color del contador
    cambia a rojo.
*/ 

var myTextArea= document.getElementById("input-msg");

var rem=document.getElementById("remainingW"); // remaining

const maxWords=150; // max. words 


myTextArea.addEventListener('input',()=>{

    
    const remaining= maxWords - ((myTextArea.value).split(" ")).length; 

    const color=(remaining<maxWords*0.15) ? "red" : null;

    rem.textContent =`${remaining} palabras`;
    rem.style.color=color;
});

/*
    Antes de validar el formulario se consideran las siguientes opciones:

    ->  Si en el campo de selección la opción es "Otros", se abre 
        dinámicamente un campo de texto


 */

var selectIdx = document.getElementById("input-select");
var newText = document.getElementById('newText');



selectIdx.addEventListener('change',()=>{

                var index= selectIdx.selectedIndex;


                if(index==4){

                    /*  Se recurre a document fragment que es  una buena opción
                    para incluir o agregar elementos, dado que aunque es un nodo 
                    del DOM no forma parte del DOM tree, es generado en memoria, 
                    y por tanto no causa reflow,y con su uso mejora el rendimiento.

                    */
                    const docFrag=document.createDocumentFragment(); 

                    const txt=document.createElement('textarea');
                    txt.setAttribute('class','form-control');
                    txt.setAttribute('id','input-text');
                    txt.setAttribute('rows','2');
                    txt.setAttribute('placeholder','Textarea para indicar otras opciones');

                    docFrag.appendChild(txt);

                    newText.appendChild(docFrag);    
                
                } else {
                    
                   newText.innerHTML=""; 
                }


});



//Valida el formulario



document.getElementById("btn").addEventListener('click', validar, false);


function validaNombre() {
    var elemento = document.getElementById("input-name");
    if (elemento.value== null || (elemento.value).length == 0 || /^\s+$/.test(elemento.value) ) {
        alert("El campo Nombre es obligatorio y no puede contener sólo espacios en blanco");
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("input-phone");
    if  (!(/^\d{9}$/.test(elemento.value))) {
        alert("El campo Teléfono tiene que ser numérico y con nueve números consecutivos");
        return false;
    } 


    return true;
}


function validaEmail(){
    var elemento=document.getElementById("input-email");
    var regExEmail = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
    if  (regExEmail.test(elemento.value) === false) {
        alert("El campo email no es válido");
        return false;
    } 


    return true;
}


function validaMsg() {
    var elemento = document.getElementById("input-msg");
    var long=0;
    if (elemento.value== null || (elemento.value).length == 0 || /^\s+$/.test(elemento.value) ) {
        alert("El campo Mensaje es obligatorio y no puede contener sólo espacios en blanco");
        return false;
    } else  {
        count=((elemento.value).split(" ")).length; // sabemos que es un texto válido si tiene menos de 150 palabras.
        if(count>150){
        alert("Si Cervantes te conociera, siendo manco y siendo de letras,... por lo mucho que le das a la tecla. Espacio limitado a 150 palabras.")
        return false;    
        }
    }
    return true;
}



function validaSel() {

    var indice = document.getElementById("input-select").selectedIndex;                       

    if (indice == null || indice == 0 ) {
        alert("Es obligatorio seleccionar una opción en ¿Cómo me has conocido?");   
        return false;
    }

    if (indice==4){
        
        var newText=document.getElementById('input-text');

        if (newText.value== null || (newText.value).length == 0 || /^\s+$/.test(newText.value) ) {
            alert("Has seleccionado la opción - Otros -  Es un campo para rellernar libremente pero no puede estar vacio");
            return false;
        }
        return true;
    }

    return true;

}



function validar(e) {
    if (validaNombre() && validaTelefono() && validaEmail()  && validaMsg() && validaSel() &&confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}
