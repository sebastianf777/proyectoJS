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
            $("#pause, #play").show()
            $("h1").hide()
            $("body").css("background", "url(./img/fondo1.gif)")
                     .css("background-repeat", "no-repeat")
                     .css("background-position", "bottom")
                     .css("background-size", "cover")
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

                $(".enemigoYBarra").css({
                    "margin": "20px 20px 20px 40px"
                })
                enemigoFunciones()

               generarEnemigo(dataFiltrada)
                $(".log").show()
            }

        })
        $("#next").click(function () {
                $("#next").hide()
                $("#listaItemsElegidos").hide()
                enemigosDerrotados++;
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
                }, 2000);
            // }
        })
        $("#resultados").append(`<div>${enemigosDerrotados}</div>`)

    })
    .catch(error => console.log(error))