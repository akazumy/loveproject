<script type="text/javascript">
var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var targetDate = new Date("December 20, 2024");
var audio = document.getElementsByTagName('audio')[0];

if (!document.createElement('canvas').getContext) {
	var msg = document.createElement("div");
	msg.id = "errorMsg";
	msg.innerHTML = "¡Tu navegador no admite HTML5!<br/>Se recomienda usar Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
	document.body.appendChild(msg);
	$("#code").css("display", "none")
	$("#copyright").css("position", "absolute");
	$("#copyright").css("bottom", "10px");
	document.execCommand("stop");
} else {
	setTimeout(function () {
		startHeartAnimation();
	}, 5000);

	updateTime();
	setInterval(function () {
		updateTime();
	}, 1000);

	adjustCodePosition();
	$("#code").typewriter();
}

function updateTime() {
	var now = new Date();
	var timeDiff = targetDate.getTime() - now.getTime();

	var days = Math.max(Math.floor(timeDiff / (1000 * 3600 * 24)), 0);
	var hours = Math.max(Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)), 0);
	var minutes = Math.max(Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60)), 0);
	var seconds = Math.max(Math.floor((timeDiff % (1000 * 60)) / 1000), 0);

	// Agregar un 0 inicial si es menor que 10 para formatear correctamente el tiempo
	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);

	var formattedTime = days + " días, " + hours + ":" + minutes + ":" + seconds;

	$("#elapseClock").html(formattedTime);
}

audio.oncanplay = function() {
  console.log('El archivo de audio se ha cargado correctamente.');
};

audio.onplay = function() {
  console.log('El archivo de audio se está reproduciendo.');
};

console.log('La función updateTime() se está ejecutando.');

console.log('El tiempo actual es: ' + formattedTime);

console.log('El estado del elemento de audio es: ' + audio.readyState);

</script>