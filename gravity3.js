
	
	
	function drawPlayer() {
		fill(255,0,0);
		noStroke();
		rect(playerX,playerY,playerSize,playerSize);
		
		playerYSpeed += gravity;
		playerX += playerXSpeed;
		playerY += playerYSpeed;
		
		if (playerX < 0)
		{
		  playerX = 0;
		  playerXSpeed = 0;
		}
		else if (playerX > 800 - playerSize) {
		  playerX = 800 - playerSize;
		  playerXSpeed = 0;
		}
		if (playerY < 0)
		{
		  playerY = 0;
		  playerYSpeed = 0;
		}
		else if (playerY > worldH*blockSize - playerSize) {
			playerY = worldH*blockSize - playerSize;
			playerYSpeed = 0;
		}

		playerXSpeed = playerXSpeed / 1.1;
		
		
		//collision
		var playerFieldX = round(playerX/blockSize);
		var playerFieldY = round(playerY/blockSize);
		
		
		if(field[playerFieldY+1][playerFieldX] != 0) {
			playerY = playerFieldY*blockSize;
			playerYSpeed = 0;
			isOnGround = true;
		}
		else{isOnGround = false;}
		
		if(field[playerFieldY-1][playerFieldX] != 0) {
			playerY = playerFieldY*blockSize;
			playerYSpeed = 0;

		}
		
		if(field[playerFieldY][playerFieldX] != 0 && playerXSpeed > 0) {
			playerX = playerFieldX*blockSize-blockSize;
			playerXSpeed = 0;
		}
		if(field[playerFieldY][playerFieldX] != 0 && playerXSpeed < 0) {
			playerX = playerFieldX*blockSize+blockSize;
			playerXSpeed = 0;
		}
		
		
		
	};
	
	function drawBlock(x, y, type) {
		
		switch (type) {
			case 0:
				fill(138, 247, 255);
				noStroke();
				rect(x*blockSize,y*blockSize,blockSize,blockSize);
			break;
			case 1:
				fill(100, 100, 100);
				noStroke();
				rect(x*blockSize,y*blockSize,blockSize,blockSize);
			break;

			
		}
	};


	draw = function() {
		background(255, 255, 255);
		
		
		if (worldH > field.length) {
			worldH = field.length;
		}
		if (worldW > field[0].length) {
			worldW = field[0].length;
		}
		
		for(var i = 0; i < worldH; i+=1) {
			for(var j = 0; j < worldW; j+=1) {
				drawBlock(j,i,field[i][j]);
				
			};
		};
		
		drawPlayer();
		
		
		
	}