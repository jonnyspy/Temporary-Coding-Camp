void setup() {
	  size(600,600);
	}

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
	
	function drawPlayer() {
		fill(0,0,0);
		rect(playerX,playerY,20,20);
		playerX += playerXSpeed;
		playerY += playerYSpeed;
		if (playerX < 0)
		{
		  playerX = 0;
		  playerXSpeed = -playerXSpeed;
		}
		else if (playerX > 600 - 20) {
		  playerX = 600 - 20;
		  playerXSpeed = -playerXSpeed;
		}
		if (playerY < 0)
		{
		  playerY = 0;
		  playerYSpeed = -playerYSpeed;
		}
		else if (playerY > 600 - 20) {
		  playerY = 600 - 20;
		  playerYSpeed = -playerYSpeed;
		}
	};


	draw = function() {
		background(255, 200, 200);
		drawPlayer();
	}