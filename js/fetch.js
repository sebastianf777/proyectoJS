const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=100&apikey=3941cce6bcf01110d3c19f39e662bffc&hash=ffbd7e41ef8d1adac6c011225ed3ddee"

fetch(urlAPI)
    .then(res => res.json())
    .then(json => {
        console.log(json.data)
        let dataMarvel = json.data.results.filter(data => data.thumbnail.path.includes("image_not_available") == false)
        let enemigosDerrotados = 0;
        function numeroR() {
            nRandom = Math.floor(Math.random() * (dataMarvel.length - 1))
            return nRandom
        }
        console.log(dataMarvel)
        console.log("arriba es datamarvel")

        numeroR()

        $("#botonRojo").click(function () {

            numeroR()
            let listaAvatars = dataMarvel.slice(nRandom, (nRandom + 5))

            console.log(nRandom)
            console.log(listaAvatars)


            renderAvatars(listaAvatars)
            $("#espacioAvatars").show()

            $(".heroAvatar").click(function (e) {


                elegirAvatar(e, dataMarvel)
            })


        })

        $("#empezar").click(function () {


            let dataFiltrada = dataMarvel[Math.floor(Math.random() * dataMarvel.length)]
            console.log(dataFiltrada)

            $(".enemigoYBarra").css({
                "margin": "20px 20px 20px 40px"
            })

            generarEnemigo(dataFiltrada)
             enemigoFunciones()
            $(".log").show()

        })
        $("#next").click(function () {
            // function reset () {
            if ($(".bar").width() <= 0) {
                enemigosDerrotados++;
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
                 
                    generarEnemigo(dataFiltrada)
                    $("#next").hide()
                }, 2000);
            }
        })
        $("#resultados").append(`<div>${enemigosDerrotados}</div>`)

        // reset.on('click', function (e) {

        //     setTimeout(() => {

        //     }, 1000);

        // });
    })
    .catch(error => console.log(error))