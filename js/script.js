$(window).on("load", function () {
  document.location.href = "#home";
});

var countDownDate = new Date("Aug 30, 2022 08:00:00").getTime();

var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;

  if (timeleft < 0) {
    clearInterval(myfunc);
    $("#end").addClass("bg-abu");
    $("#end-container").removeClass("col-12");
    $("#end-container").addClass("col-8");
    $("#end").addClass("p-3");
    $("#end").html("");
    $("#end").html(`
	    	<h5 class="align-middle">Acara sedang berlangsung!</h5>
    	`);
  }
}, 1000);

$(window).scroll(function () {
  var y = $(window).scrollTop();
  if (y >= 10) {
    $("nav").addClass("bg-abu");
    $("nav").addClass("shadow");
    $("nav").css("height", "70px");
  } else {
    $("nav").removeClass("bg-abu");
    $("nav").removeClass("shadow");
    $("nav").css("height", "100px");
  }
});

var audio = document.getElementById("backsound");

$(".audio-control").on("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

$("#btn-open").click(function () {
  $("*").css("overflow", "visible");
  $("#cover").css("top", "-100vh");
  audio.play();
});
