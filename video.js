var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML=video.volume*100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause()
})

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down Video");
	video.playbackRate-=.10
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up Video")
	video.playbackRate +=.10
	console.log(video.playbackRate)

})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Ahead");
	bd = video.currentTime
	video.currentTime=bd + 10
})

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute Audio");
	if (video.muted==false){
		video.muted=true
		document.getElementById("mute").innerHTML="unmute"
	}
	else{
		video.muted=false
		document.getElementById("mute").innerHTML="mute"
	}

})

document.querySelector("#slider").addEventListener("change", function(){
	console.log("Changing volume");
	console.log(this.value)
	volume = this.value
	video.volume = volume/100
	v = document.getElementById("volume")
	v.value = video.volume
	document.getElementById("volume").innerHTML = v.value*100 + "%"
})

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Changing style to vintage")
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Changing back to original")
	video.classList.remove("oldSchool")
})


