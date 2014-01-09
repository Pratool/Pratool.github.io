$(document).ready(function(){
	scrWidth = 1580;
	scrHeight = 830;
	
	grid(scrWidth, scrHeight);
	
	function vertCols(screenWidth, screenHeight)
	{
		$("body").append("<style type='text/css'>.vertBar { width: 2px; margin-left: -1px; background: black; height: " + screenHeight + "px; position: absolute; top: 0px; }</style>");
		
		var i;
		for (i = 0; i <= screenWidth; i+=50)
		{
			$("body").append("<div class='vertBar' style='left: " + i + "px'></div>");
		}
	}
	
	function horzCols(screenWidth, screenHeight)
	{
		$("body").append("<style type='text/css'>.horzBar { height: 2px; margin-top: -1px; background: black; width: " + screenWidth + "px; position: absolute; left: 0px; }</style>");
		
		var i;
		for (i = 0; i <= screenHeight; i+=50)
		{
			$("body").append("<div class='horzBar' style='top: " + i + "px'></div>");
		}
	}
	
	function grid(sw, sh)
	{
		vertCols(sw, sh);
		horzCols(sw, sh);
	}
});