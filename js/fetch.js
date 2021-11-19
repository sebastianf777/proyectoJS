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

            // console.log(nRandom)
            // console.log(listaAvatars)


            renderAvatars(listaAvatars)
            $("#espacioAvatars").show()

            $(".heroAvatar").click(function (e) {


                elegirAvatar(e, dataMarvel)
            })


        })

        $("#empezar").click(function () {
            if (enemigosDerrotados > 0) {
                initTimer("00:30");
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
                // $("#listaItemsElegidos").empty()

                // $("#listaItemsElegidos").show()

            } else {
                initTimer("01:30");
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
            // function reset () {
                $("#next").hide()
                $("#listaItemsElegidos").hide()
            // if ($(".bar").width() <= 0) {
                enemigosDerrotados++;
                $(".gradientEnemy").css("background", "#222")
                $("#resultados").empty()
                $("#resultados").append(`<div>${enemigosDerrotados}</div>`)

                console.log(enemigosDerrotados)
                // enemigoFunciones()

                let dataFiltrada = dataMarvel[Math.floor(Math.random() * dataMarvel.length)]

                $(".log").prepend(`<div>resetting health to 1000</div>
            <div class="lds-hourglass"></div>`)

                setTimeout(() => {
                    $("#enemigoRandom").empty()
                    $(".health-bar").hide()
                    $('.log').empty()
                    $(".enemigo").data('value', $(".enemigo").data('total'));
                    $('.health-bar').find('.hit').css({
                        'width': '0'
                    });
                    $('.health-bar').find('.bar').css('width', '100%');
                    // actualizarLista();
                    generarEnemigo(dataFiltrada)
                    $("#listaItemsElegidos").show()
                }, 2000);
            // }
        })
        $("#resultados").append(`<div>${enemigosDerrotados}</div>`)

        // reset.on('click', function (e) {

        //     setTimeout(() => {

        //     }, 1000);

        // });
    })
    .catch(error => console.log(error))