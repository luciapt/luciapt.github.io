$(window).scroll(function(){

    //NÚMEROS

    $('.ranking').each(function() {
        if ($(this).visible(true)) {  
            $(this).addClass('visible'); // Add 'visible' class when in view
        } else {
            $(this).removeClass('visible'); // Remove 'visible' class when out of view
        }
    });

    //PARALAX
    $('.parallax-window').parallax({imageSrc: 'imagenes/peliculas.jpg' });

    //INICIO COPIA

     //Si el elemento es visible
     if ($(".ind1").visible(true)) {
         //Añade la clase “visible”
         $(".ind1").addClass("visible");
         } else {
         //Si no es visible quita:
         $(".ind1").removeClass("visible");
         }

    
    //IMAGEN APARECE

    $('.gif').each(function() {
        if ($(this).visible(true)) {  
            $(this).addClass('visible'); // Add 'visible' class when in view
        } else {
            $(this).removeClass('visible'); // Remove 'visible' class when out of view
        }
    });


});