$(document).ready(function(){
	$("body").append("<div class='portfolio'>portfolio</div><div class='bio'>bio</div><div class='art'>side proj</div>");
	
	var tabNames = new Array("portfolio", "bio", "art");
	var numberTabs = 3;
	var temp;

	for (var i = 0; i <= numberTabs-1; i++)
	{
		$("."+tabNames[i]).mouseover(function(){
			$(this).css("width", "160px");
			$(this).css("color", "DDDDDD");
		});
		$("."+tabNames[i]).mouseout(function(){
			$(this).css("width", "120px");
			$(this).css("color", "#111111");
		});
	}
	
	$(".portfolio").click(function(){
		window.location.href = "portfolio.html";
	});
});