var obox = document.getElementById("box");
obox.onmousedown = function(ev){
	var oEvent = ev || event
	var divX = oEvent.clientX - obox.offsetLeft
	var divY = oEvent.clientY - obox.offsetTop
};