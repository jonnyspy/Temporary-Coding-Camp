

	void keyPressed() {
		if (keyCode === RIGHT) {
			playerXSpeed += 0.1;
		} else if (keyCode === LEFT) {
			playerXSpeed -= 0.1;
		} else if (keyCode === UP) {
			playerYSpeed -= 0.1;
		} else if (keyCode === DOWN) {
			playerYSpeed -= -0.1;
		}
	}
	
	var playerX = 200;
	var playerY = 200;
	var playerXSpeed = 0;
	var playerYSpeed = 0;
	
