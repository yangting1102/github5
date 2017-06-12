var oBtn = document.getElementsByClassName("box");
oBtn.onmousedown = function(ev){
	var oEvent = ev  || event;
	var disX = oEvent.clientX - oBox.offsetLeft;
	var disY = oEvent.clientY - oBox.offsetTop;
}
