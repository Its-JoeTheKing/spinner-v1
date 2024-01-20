var i = 0;

window.onwheel = e => {
  const rotationIncrement = e.deltaY >= 0 ? 120 : -120;
  function updateRotation() {
	document.getElementById("test").style.transform = "rotate(" + i + "deg)";
	i += rotationIncrement;
  }
  requestAnimationFrame(updateRotation);
};
