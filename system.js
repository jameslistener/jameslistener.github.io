function update(){
	var canvas = document.getElementById('tutorial');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,300,300);
		ctx.fillStyle = 'rgba(0,0,0,0.4)';
		ctx.strokeStyle = 'rgba(0,153,255,0.4)';
		ctx.save();
		ctx.translate(150,150);

		ctx.fillRect(0,-12,50,24);

		ctx.restore();

		window.requestAnimationFrame(update);
	}
}