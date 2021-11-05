
	
	
	function drawPlayer() {
		fill(255,0,0);
		rect(playerX,playerY,20,20);
		
		playerYSpeed += gravity;
		playerX += playerXSpeed;
		playerY += playerYSpeed;
		
		if (playerX < 0)
		{
		  playerX = 0;
		  playerXSpeed = 0;
		}
		else if (playerX > height - 20) {
		  playerX = height - 20;
		  playerXSpeed = 0;
		}
		if (playerY < 0)
		{
		  playerY = 0;
		  playerYSpeed = 0;
		}
		else if (playerY > width - 20) {
			playerY = width - 20;
			playerYSpeed = 0;
		}
		
		
		
		
		
	};


	draw = function() {
		background(0, 0, 0);
		//image(img2, 0, 0, 600, 600);
		
		
		drawPlayer();
		
		for(var i = 0; i < worldH; i++) {
			for(var j = 0; j < worldW; j++) {
				drawBlock(j,i,field[i][j]);
			};
		};
		
		
		
	}