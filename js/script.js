var countDownDate = new Date("Jul 11, 2021 11:00:00").getTime();

var myfunc = setInterval(function() {
	var now = new Date().getTime();
	var timeleft = countDownDate - now;
	    
	var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

	document.getElementById("days").innerHTML = days
	document.getElementById("hours").innerHTML = hours
	document.getElementById("mins").innerHTML = minutes
	document.getElementById("secs").innerHTML = seconds

	if (timeleft < 0) {
	    clearInterval(myfunc);
	    document.getElementById("days").innerHTML = ""
	    document.getElementById("hours").innerHTML = "" 
	    document.getElementById("mins").innerHTML = ""
	    document.getElementById("secs").innerHTML = ""
	    document.getElementById("end").innerHTML = "TIME UP!!";
	}
}, 1000)


$(window).scroll(function(){
	var y = $(window).scrollTop()
	if (y >= 10){
		$('nav').addClass('bg-abu');
		$('nav').addClass('shadow');
		$('nav').css('height', '70px');
	} else {
		$('nav').removeClass('bg-abu');	
		$('nav').removeClass('shadow');
		$('nav').css('height', '100px');
	}
});

var audio = document.getElementById("backsound");

$(window).ready(function(){
		audio.play();
})

$('.audio-control').on('click', function(){
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
});