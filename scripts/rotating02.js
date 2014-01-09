function rotatePics(direction)	// Has to have more than 1 picture
{								// Make sure all images loaded have a z-index of 3
	if (direction == "left")
	{
		var tempPic1 = imageLocs[0];
		var tempPic2;
		var lastPic = imageLocs[imageLocs.length-1];
		imageLocs[0] = lastPic;
		
		for (var i = 0; i <= imageLocs.length-2; i++)
		{
			tempPic2 = imageLocs[i+1];
			imageLocs[i+1] = tempPic1;
			tempPic1 = tempPic2;
		}
	}
	
	else
	{
		var firstPic = imageLocs[0];
		
		for (var i = 0; i <= imageLocs.length-2; i++)
		{
			imageLocs[i] = imageLocs[i+1];
		}
		
		imageLocs[imageLocs.length-1] = firstPic;
	}
	
	var lastPic;
	
	for (var i = 0; i <= imageLocs.length-1; i++)
	{
		if ($(".img"+i).css("left") == "1280px")
			lastPic = ".img" + i;
	}
	
	$(lastPic).css("z-index", "1");
	
	for (var i = 0; i <= imageLocs.length-1; i++)
	{
		$(".img"+i).animate({
			left: imageLocs[i]
		}, 500, function(){
			$(lastPic).css("z-index", "3");
		});
	}
}