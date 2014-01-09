function rotatePics(direction)	// Has to have more than 1 picture
{
	var makingStyles = "";
	var setStyles = " { box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); position: absolute; top: 200px; left:";
	
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
		
		for (var i = 0; i <= imageLocs.length-1; i++)
		{
			makingStyles += ".img" + i + setStyles + imageLocs[i] + "px; } \n";
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
		
		for (var i = 0; i <= imageLocs.length-1; i++)
		{
			makingStyles += ".img" + i + setStyles + imageLocs[i] + "px; } \n";
		}
	}
	
	$("body").remove("style");
	$("body").append("<style type='text/css'>\n" + makingStyles + "</style>");
}