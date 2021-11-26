const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=100&apikey=3941cce6bcf01110d3c19f39e662bffc&hash=ffbd7e41ef8d1adac6c011225ed3ddee"
let enemigosDerrotados = 0;

fetch(urlAPI)
    .then(res => res.json())
    .then(json => {

        let dataMarvel = json.data.results.filter(data => data.thumbnail.path.includes("image_not_available") == false)

        function numeroR() {
            nRandom = Math.floor(Math.random() * (dataMarvel.length - 1))
            return nRandom
        }

        numeroR()

        $("#botonRojo").click(function () {

            numeroR()
            let listaAvatars = dataMarvel.slice(nRandom, (nRandom + 5))

            renderAvatars(listaAvatars)
            $("#espacioAvatars").show()

            $(".heroAvatar").click(function (e) {


                elegirAvatar(e, dataMarvel)
            })


        })

        $("#empezar").click(function () {
            $("#pause, #play, .music").show()
            $("h1").hide()
            enemigosDerrotados == 0 ? ($("body").css("background", "url(./img/fondo1.gif)")
                .css("background-repeat", "no-repeat")
                .css("background-position", "bottom")
                .css("background-size", "cover")) : null
            $("enemigoYBarra").show()
            if (enemigosDerrotados > 0) {
                initTimer("01:00");
                let dataFiltrada = dataMarvel[Math.floor(Math.random() * dataMarvel.length)]
                // enemigosDerrotados = 0
                $("#resultados").empty()
                $("#resultados").append(`<div>${enemigosDerrotados}</div>`)

                function empezarDeNuevo() {
                    $(".health-bar").hide()
                    $('.log').empty()
                    $(".enemigo").data('value', $(".enemigo").data('total'));
                    $('.health-bar').find('.hit').css({
                        'width': '0'
                    });
                    $('.health-bar').find('.bar').css('width', '100%');

                    generarEnemigo(dataFiltrada)
                }
                empezarDeNuevo()


            } else {
                initTimer("01:00");
                $("#listaItemsElegidos").show()

                let dataFiltrada = dataMarvel[Math.floor(Math.random() * dataMarvel.length)]
                console.log(dataFiltrada)

              
                enemigoFunciones()

                generarEnemigo(dataFiltrada)
                $(".log").show()
            }

        })
        $("#next").click(function () {

            $("#next").hide()

            $("#listaItemsElegidos").hide()
            enemigosDerrotados++;
            enemigosDerrotados >= 20 ? ($("#ocultoB").show(), $("#ocultoA").hide()) : null

            if (enemigosDerrotados >= 30) {
                $(".gradientLogs2").fadeIn()
                $("#puntuacionYResultados, #botonRojoDiv, .enemigoYBarra, #botonPurpura").hide()
                $(".gradientLogs2").css("opacity", "1")
                $("nav").css("opacity", "1")
                $(".log").prepend(`<p>Eso fue todo gracias! espero que lo hagas disfrutado!!! <span><img src="https://img.icons8.com/external-soft-fill-juicy-fish/40/000000/external-celebrate-emoji-soft-fill-soft-fill-juicy-fish.png" alt="imagen"></span></p>`)

            } else {
                enemigosDerrotados >= 10 ? ($("#empezar").empty(), $("#botonCambiar").empty(),
                    $("#empezar").append(`<img src = "https://img.icons8.com/external-wanicon-flat-wanicon/30/000000/external-videogame-stay-at-home-wanicon-flat-wanicon.png" alt="img">`),
                    $("#botonCambiar").append(`<img src = "https://img.icons8.com/external-becris-flat-becris/30/000000/external-transfer-customer-loyalty-program-becris-flat-becris.png" alt="img">`),
                    $(".botonPurpuraContainer2").prepend(`<div class="lds-hourglass"></div>`)
                ) : null
                $(".gradientEnemy").css("background", "#222")
                $("#resultados").empty()
                $("#resultados").append(`<div>${enemigosDerrotados}</div>`)
                actualizarLista();
                let dataFiltrada = dataMarvel[Math.floor(Math.random() * dataMarvel.length)]

                $(".log").prepend(`<div>Preparando próxima ronda</div>
            <div class="lds-hourglass"></div>`)
                $(".botonPurpuraContainer").prepend(`<div class="lds-hourglass"></div>`)
                setTimeout(() => {
                    $(".lds-hourglass").remove()
                    $("#enemigoRandom").empty()
                    $(".health-bar").hide()
                    $('.log').empty()
                    $(".enemigo").data('value', $(".enemigo").data('total'));
                    $('.health-bar').find('.hit').css({
                        'width': '0'
                    });
                    $('.health-bar').find('.bar').css('width', '100%');
                    generarEnemigo(dataFiltrada)
                    $("#listaItemsElegidos").show()
                }, 1000);
            }
            // }
        })

        $("#botonCambiar").click(function () {
            $(".grupo1").css("display") == "none" ? $(".poderDiv1 .toggleD").hide() : $(".poderDiv1 .toggleD").hide() 
            $(".grupo2").css("display") == "none" ? null : $(".poderDiv2 .toggleD").hide() 
            $(".grupo3").css("display") == "none" ? null : $(".poderDiv3 .toggleD").hide() 
            
        })
        $("#resultados").append(`<div>${enemigosDerrotados}</div>`)

    })
    .catch(error => console.log(error))