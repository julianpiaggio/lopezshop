$(document).ready(function(){

    var linkmenos = './assets/image/boton-menos2.jpg';
    var linkmas = './assets/image/boton-mas.png'
    var total = $(".valor-total");
    var num_total = parseInt((total).text());
    console.log(num_total);

    function aparecerMenos(){
            $('#btn1').attr('src', linkmenos);
            $('#btn1').removeClass('boton-menos');
            $('#btn1').addClass('boton-mas');
        }

        function aparecerMas(){
            $('#btn1').attr('src', linkmas);
            $('#btn1').removeClass('boton-mas');
            $('#btn1').addClass('boton-menos');
        }

    $(".boton").click(function(){
    let nomClase = $('#btn1').attr('class');
        if(nomClase == 'boton-menos'){
            aparecerMenos();
            num_total = num_total + parseInt($(".v1").text());
            total.text(num_total);
            console.log(num_total);
            $(".servicios").append('<p class="banio">Baño $500</p>');
        } else {
            aparecerMas();
            num_total = num_total - parseInt($(".v1").text());
            total.text(num_total);
            console.log(num_total);
            $(".banio").remove();
        }
    })

    $(".boton2").click(function(){
        let nomClase = $('#btn2').attr('class');
        if(nomClase == 'boton-menos'){
            $('#btn2').attr('src', linkmenos);
            $('#btn2').removeClass('boton-menos');
            $('#btn2').addClass('boton-mas');
            num_total = num_total + parseInt($(".v2").text())
            total.text(num_total);
            console.log(num_total);
            $(".servicios").append('<p class="adie">Adiestramiento $3000</p>');
        } else {
            $('#btn2').attr('src', linkmas);
            $('#btn2').removeClass('boton-mas');
            $('#btn2').addClass('boton-menos');
            num_total = num_total - parseInt($(".v2").text());
            total.text(num_total);
            console.log(num_total);
            $(".adie").remove();
        }
    })

    $(".boton3").click(function(){
        let nomClase = $('#btn3').attr('class');
        if(nomClase == 'boton-menos'){
            $('#btn3').attr('src', linkmenos);
            $('#btn3').removeClass('boton-menos');
            $('#btn3').addClass('boton-mas');
            num_total = num_total + parseInt($(".v3").text());
            total.text(num_total);
            console.log(num_total);
            $(".servicios").append('<p class="cast">Castracion $5000</p>');
        } else {
            $('#btn3').attr('src', linkmas);
            $('#btn3').removeClass('boton-mas');
            $('#btn3').addClass('boton-menos');
            num_total = num_total - parseInt($(".v3").text());
            total.text(num_total);
            console.log(num_total);
            $(".cast").remove();
        }
    })

    $(".boton4").click(function(){
        let nomClase = $('#btn4').attr('class');
        if(nomClase == 'boton-menos'){
            $('#btn4').attr('src', linkmenos);
            $('#btn4').removeClass('boton-menos');
            $('#btn4').addClass('boton-mas');
            num_total = num_total + parseInt($(".v4").text());
            total.text(num_total);
            console.log(num_total);
            $(".servicios").append('<p class="corte">Corte $2000</p>');
        } else {
            $('#btn4').attr('src', linkmas);
            $('#btn4').removeClass('boton-mas');
            $('#btn4').addClass('boton-menos');
            num_total = num_total - parseInt($(".v4").text());
            total.text(num_total);
            console.log(num_total);
            $(".corte").remove();
        }
    })

    $(".boton5").click(function(){
        let nomClase = $('#btn5').attr('class');
        if(nomClase == 'boton-menos'){
            $('#btn5').attr('src', linkmenos);
            $('#btn5').removeClass('boton-menos');
            $('#btn5').addClass('boton-mas');
            num_total = num_total + parseInt($(".v5").text());
            total.text(num_total);
            console.log(num_total);
            $(".servicios").append('<p class="paseo">Paseo $1500</p>');
        } else {
            $('#btn5').attr('src', linkmas);
            $('#btn5').removeClass('boton-mas');
            $('#btn5').addClass('boton-menos');
            num_total = num_total - parseInt($(".v5").text());
            total.text(num_total);
            console.log(num_total);
            $(".paseo").remove();
        }
    })

    $(".boton6").click(function(){
        let nomClase = $('#btn6').attr('class');
        if(nomClase == 'boton-menos'){
            $('#btn6').attr('src', linkmenos);
            $('#btn6').removeClass('boton-menos');
            $('#btn6').addClass('boton-mas');
            num_total = num_total + parseInt($(".v6").text());
            total.text(num_total);
            console.log(num_total);
            $(".servicios").append('<p class="control">Control $1000</p>');
        } else {
            $('#btn6').attr('src', linkmas);
            $('#btn6').removeClass('boton-mas');
            $('#btn6').addClass('boton-menos');
            num_total = num_total - parseInt($(".v6").text());
            total.text(num_total);
            console.log(num_total);
            $(".control").remove();
        }
    })


    function aparecerMenos(){
        $('#btn1').attr('src', linkmenos);
        $('#btn1').removeClass('boton-menos');
        $('#btn1').addClass('boton-mas');
    }

    function aparecerMas(){
        $('#btn1').attr('src', linkmas);
        $('#btn1').removeClass('boton-mas');
        $('#btn1').addClass('boton-menos');
    }



    $(".btn-solicitar").click(function(){
        if($(".valor-total").text()==0){
            alert('No ingreso ningun servicio');
        } else {
            alert('Se ha enviado la solicitud del servicio. Muchas gracias por elegirnos');
        }
    })

})