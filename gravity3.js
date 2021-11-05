
	
	
	function drawPlayer() {
		fill(0,0,0);
		rect(playerX,playerY,20,20);
		image(img, playerX-50, playerY-50, 100, 100);
		
		playerYSpeed += gravity;
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
		background(0, 0, 200);
		image(img2, 0, 0, 600, 600);
		
		
		drawPlayer();
		
		
		
	}