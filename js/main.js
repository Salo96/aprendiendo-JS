$(document).ready(function(){
    // slider
    if(window.location.href.indexOf('index') >-1){
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        auto: true,
        pager: false
      });
    }

    //   posts

    if(window.location.href.indexOf('index')>-1){
            var posts=[
                {
                    title: 'Prueba titulo 1',
                    date: 'publicado la fecha '+ moment().format("MMMM Do YYYY"),
                    content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes deLorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,  el cual incluye versiones de Lorem Ipsum.'
                },
                {
                    title: 'Prueba titulo 2',
                    date: 'publicado la fecha '+ moment().format("MMMM Do YYYY"),
                    content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes deLorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,  el cual incluye versiones de Lorem Ipsum.'
                },
                {
                    title: 'Prueba titulo 3',
                    date: 'publicado la fecha '+ moment().format("MMMM Do YYYY"),
                    content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes deLorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,  el cual incluye versiones de Lorem Ipsum.'
                },
                {
                    title: 'Prueba titulo 4 ',
                    date: 'publicado la fecha'+ moment().format("MMMM Do YYYY"),
                    content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes deLorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,  el cual incluye versiones de Lorem Ipsum.'
                },
                {
                    title: 'Prueba titulo 5',
                    date: 'publicado la fecha'+ moment().format("MMMM Do YYYY"),
                    content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes deLorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,  el cual incluye versiones de Lorem Ipsum.'
                },
            ];

        posts.forEach((item, index)=>{
                var publicacion =`
                <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer más</a>
                </article>
                `;
            $("#posts").append(publicacion);
        });
    }

    //  selectores de tema
    var theme=$("#theme");   

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    $("#to-red").click(function(){
        console.log(theme.attr("href", "css/red.css"));
    });

    // scroll subir arriba
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $("#login form").submit(function(){
        var name = $("#name").val();

        localStorage.setItem("name", name);
    });

    var name = localStorage.getItem("name");

    if(name != null && name != "undefined"){
        var about_parrafo = $("#about p")
        about_parrafo.html("<br> <strong> bienvenido <strong>"+name);
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>")
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }


    // acordeon
    if(window.location.href.indexOf('about')>-1){
        $("#acordeon").accordion();
    }

    // reloj
    if(window.location.href.indexOf('reloj')>-1){
        setInterval(function(){
            var reloj=moment().format('h:mm:ss');
            $('#reloj').html(reloj);
        }), 1000;
    }

    // validacion
    if(window.location.href.indexOf('contact')>-1){

        $("form input[name='date']").datepicker({
            dateformat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
        });
    }
   
   
});