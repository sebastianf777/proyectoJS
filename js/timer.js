 TweenLite.defaultEase = Expo.easeOut;

 // other ways --> "0:15" "03:5" "5:2"
 //  initTimer("00:30");
 let reloadBtn = document.querySelector('.reload');
 let timerEl = document.querySelector('.timer');

 function initTimer(t) {

    let self = this,
       timerEl = document.querySelector('.timer'),
       minutesGroupEl = timerEl.querySelector('.minutes-group'),
       secondsGroupEl = timerEl.querySelector('.seconds-group'),

       minutesGroup = {
          firstNum: minutesGroupEl.querySelector('.first'),
          secondNum: minutesGroupEl.querySelector('.second')
       },

       secondsGroup = {
          firstNum: secondsGroupEl.querySelector('.first'),
          secondNum: secondsGroupEl.querySelector('.second')
       };

    let time = {
       min: t.split(':')[0],
       sec: t.split(':')[1]
    };

    let timeNumbers;

    function updateTimer() {

       let timestr;
       let date = new Date();

       date.setHours(0);
       date.setMinutes(time.min);
       date.setSeconds(time.sec);

       let newDate = new Date(date.valueOf() - 1000);
       let temp = newDate.toTimeString().split(" ");
       let tempsplit = temp[0].split(':');

       time.min = tempsplit[1];
       time.sec = tempsplit[2];

       timestr = time.min + time.sec;
       timeNumbers = timestr.split('');
       updateTimerDisplay(timeNumbers);
       if(timestr === '0001')
       $("#next").hide();
       

       if (timestr === '0000')
          countdownFinished();

       if (timestr != '0000')
          setTimeout(updateTimer, 1000);

    }

    function updateTimerDisplay(arr) {

       animateNum(minutesGroup.firstNum, arr[0]);
       animateNum(minutesGroup.secondNum, arr[1]);
       animateNum(secondsGroup.firstNum, arr[2]);
       animateNum(secondsGroup.secondNum, arr[3]);

    }

    function animateNum(group, arrayValue) {

       TweenMax.killTweensOf(group.querySelector('.number-grp-wrp'));
       TweenMax.to(group.querySelector('.number-grp-wrp'), 1, {
          y: -group.querySelector('.num-' + arrayValue).offsetTop
       });

    }

    setTimeout(updateTimer, 1000);

 }

 function countdownFinished() {
    $("#listaItemsElegidos").empty()
    $("#listaItemsElegidos").hide()
    $(".enemigoYBarra").hide()
    $(".lds-hourglass").remove()
    $(".botonPurpuraContainer2").prepend(`<div class="lds-hourglass"></div>`)
    $("#next").hide();
    
    setTimeout(() => {
      $(".botonPurpuraContainer").prepend(`<div class="lds-hourglass"></div>`)
      
       enemigosDerrotados >= 30 ? $(".log").append("Cualquier consulta, tienes la info en créditos/links") : $(".log").prepend(`<div>Se terminó el tiempo! se habrá desbloqueado algo? :O</div>
       <div class="lds-hourglass"></div>)`)

       $("#next").hide();

    }, 500);
    
    setTimeout(function () {
       $(".lds-hourglass").remove()
       $(".enemigoYBarra").hide()
       $("#next").hide()
       $(".gradientEnemy").css("background", "#222")
       $(".log").empty()

        
       enemigosDerrotados >= 30 ? ($(".log").append("Si quieres empezar de nuevo, debes recargar la página. Tendrás tus últimas 3 habilidades elegidas guardadas por el primer intento *_*"), $(".gradientLogs2").css("opacity", "1") ): $(".log").append(`<div>Buen intento! Mientras mayor sea la puntuación, tendrás más poderes disponibles! </div>`)
       $("#enemigoRandom").empty()
       $("#listaItemsElegidos").empty()
       $("#botonJuega").html("Intentar de nuevo!")
       $("#botonJuega").show()

       //    TweenMax.set(reloadBtn, { scale: 0.8, display: 'block' });
       //    TweenMax.to(timerEl, 1, { opacity: 0.2 });
       //    TweenMax.to(reloadBtn, 0.5, { scale: 1, opacity: 1 }); 
    }, 4000);
 }

 //  reloadBtn.addEventListener('click', function () {
 //     TweenMax.to(this, 0.5, { opacity: 0, onComplete:
 //        function () { 
 //           reloadBtn.style.display= "none";
 //        } 
 //     });
 //     TweenMax.to(timerEl, 1, { opacity: 1 });
 //     initTimer("12:35");
 //  });