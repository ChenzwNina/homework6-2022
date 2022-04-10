var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

})

document.querySelector("#play").addEventListener("click", function(){
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
})

document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("Pause Video");
})

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate /= 0.95;
	console.log("Speed up video");
	console.log("Speed is", video.playbackRate);
})

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.95;
	console.log("Slow down video");
	console.log("Speed is", video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 15
	if (video.currentTime >= video.duration){
		video.currentTime = 0;}
	console.log("Video current time is", video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Video is muted");}
	else{
		video.muted = false;
		console.log("Video is unmuted");
		document.querySelector("#mute").innerHTML = "Mute"
	}
})

document.querySelector("#slider").addEventListener("click", function(){
	var vol = document.querySelector("#slider").value/100;
	video.volume = vol;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("Video volume is", video.volume * 100, "%");
	})

document.querySelector("#vintage").addEventListener("click", function(){
	document.getElementById("player1").classList.add('oldSchool');
	console.log("Video style is old school");
	})

document.querySelector("#orig").addEventListener("click", function(){
	document.getElementById("player1").classList.remove('oldSchool');
	console.log("Video style is original");
	})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

