
	var key = '';
	var isOnGround = false;
	var playerX = 200;
	var playerY = 200;
	var playerXSpeed = 0;
	var playerYSpeed = 0;
	var gravity = 1;
	
	var blockSize = 10;
	var worldH = 80;
	var worldW = 80;
	
	var playerSize = 10;
	
	
	void keyPressed() {

		if (keyCode === RIGHT) {
			playerXSpeed += 3;
		} else if (keyCode === LEFT) {
			playerXSpeed -= 3;
			
		} else if (keyCode === UP && isOnGround) {
			playerYSpeed = -10;
		} else if (keyCode === DOWN) {
			playerYSpeed -= -0.1;
			
		}

		key = keyCode;
	}

	
	var field = [];
	
	

	
	
