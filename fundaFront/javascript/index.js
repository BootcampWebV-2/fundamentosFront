
/*  Banner: A través de la función se implementan simultáneamente dos "banners": uno que es
    Una animación de texto, para la que se define una función muy sencilla  cuya finalidad
    es la ejecutar simples procesos, paso a paso, cada vez que setInterval lance una llamada
    a la misma.
    Y anidada dentro de dicha función otra idéntica, cuyo array está formado por direcciones
    de imágenes, que se aprovecha del setInterval original, para ir recorriendo a su vez, 
    las imégenes incluidas.    

*/


function showAbout(){

    //Parte correspondiente al texto

    var aboutPro=['Economista','Resolutivo','Autónomo','Un buen comunicador','Un jugador de equipo',
     'Un lider innovador y visionario', 'Pragmático y enfocado en el cliente',
     'Continuará...', 'Para más info -> Contactar', 'Developer'];

    var aboutPersonal=['La música y la lectura','El Cine','La familia y amigos',
     'Viajar','Aprender cosas nuevas', 'Desarrollar aplicaciones',
    'Dibujar y diseñar drones ','Continuará...' ,
     'Para más info -> Contactar','Correr, ciclismo, tenis...' ];  


    var textPro=document.getElementById('spaBanner1');
    var textPer=document.getElementById('spaBanner2');


    var z=0;
    var numAbout=(aboutPro.length)-1;
  

    textPro.innerHTML= ` > Developer <`;
    textPer.innerHTML= ` [ Correr, ciclismo, tenis... ]`;
   
    //Parte correspondiente al slide de imagenes - Hobbies

    var aboutHobbies=['images/music.png','images/idea.png','images/fun.png',
    'images/internet.png','images/man.png','images/photo.png', 'images/computers.png',
    'images/share.png','images/world.png'];


    var imgHobbies=document.getElementById('hobbiesImg');

    var k=0;
    var numImg=(aboutHobbies.length)-1;

    imgHobbies.src='images/world.png'; 
    imgHobbies.style.width='9rem';
    imgHobbies.style.height='6rem';
    
    /*Tras comprobar el resultado, se ha optado por aprovechar el timer setInterval,
    establecido para la función counter, encargada de realizar la animación de texto,
    y anidar en la misma no otro setInterval para implementar el slider de imagenes,
    sino aprovechar la llamada a counter para que  a través de esta función se ejecute
    otra, muy parecida, y mantener asi la misma velocidad de ejecución del slider de
    imágenes, para el que se establece un contador propio.
    De anidar un setInterval,tras pasar unos segungos, las llamadas se multiplican y
    las imagenes empiezan a cambiar rápidamente, lo que era de esperar por otra parte,
    perdiendo el efecto de slider deseado.
   */
    var timer = setInterval(counter,4000); 


    
    /*. Counter - Se define de forma que se cree un loop infinito. 
        Se hace paso a paso, porque de otra forma cuando se invoca o hace
        la llamada se realiza el recorrido del array completo
        y sólo muestra el valor final.  
        
        idem para showImg, se muestra el repertorio de imagenes de que consta el array
        aboutHobbies.
    */    

    function counter(){ 

        

        if(z==numAbout){
            textPro.innerHTML=` > ${aboutPro[z]} <`;
            textPer.innerHTML=` [ ${aboutPersonal[z]} ]`;
            z=0;
        }else{
            textPro.innerHTML=` > ${aboutPro[z]} <`;
            textPer.innerHTML=` [ ${aboutPersonal[z]} ]`;
            z+=1;
        } 

       // var secondTimer = setInterval(showImg,4000); // 
        
        function showImg(){
    
                if(k==numImg){
                    imgHobbies.src=` ${aboutHobbies[k]}`;
                    imgHobbies.style.width='9rem';
                    imgHobbies.style.height='6rem';
                    k=0;
                }else{
                    imgHobbies.src=` ${aboutHobbies[k]}`;
                    imgHobbies.style.width='9rem';
                    imgHobbies.style.height='6rem';
                    k+=1;
                } 
        }

        showImg(); 

    }        



};




showAbout();












