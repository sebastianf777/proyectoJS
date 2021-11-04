const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3941cce6bcf01110d3c19f39e662bffc&hash=ffbd7e41ef8d1adac6c011225ed3ddee"

fetch(urlAPI)
	.then(res => res.json())
	.then(json => {
        let listaAvatars = json.data.results.slice(0,5)
        let enemigoImg = json.data.results
        // let urlHero = listaAvatars.urls[0].url;
        console.log(listaAvatars)
        $("#botonRojo").click(function(){
            renderAvatars(listaAvatars)
            $(".heroAvatar").click(function (e) {
                elegirAvatar(e)
            })
        })
		
        $("#empezar").click(function () {

                
            let dataFiltrada = enemigoImg[Math.floor(Math.random() * enemigoImg.length)]
            console.log(dataFiltrada)
            
            $(".enemigoYBarra").css({
                "margin": "20px 20px 20px 40px"
            })

            generarEnemigo(dataFiltrada)
            enemigoFunciones()
            $(".log").show()

        })
        $(".reset").click(function () {
        
            $(".log").prepend(`<div>resetting health to 1000</div>
            <div class="lds-hourglass"></div>`)

            setTimeout(() => {
               
                let dataFiltrada = listaAvatars[Math.floor(Math.random() * listaAvatars.length)]
                
                generarEnemigo(dataFiltrada)

            }, 2000);

        })

	})
	.catch(error => console.log(error))


