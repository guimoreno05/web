var params = new Array();
function getParams()
{
	var locationSearch = document.location.search.toString();
	locationSearch = (locationSearch.substring(0,1) == "?") ? locationSearch.substring(1) : locationSearch;
	var searchParamsArr = locationSearch.split("&");
	for (var i=0; i<searchParamsArr.length; i++)
	{
		var searchParamArr = searchParamsArr[i].split("=");
		for (var y=0; y<searchParamArr.length; y++)
		{
			if (y == 0)
			{
				params[searchParamArr[y]] = "";
			}
			else
			{
				params[searchParamArr[0]] = searchParamArr[y];
			}
		}
	}
}

function addStatEvent(evt, referral)
{
	if (evt == "")
		return;

	var ref = "";
	if (referral)
		ref = "&ref=" + referral;

	var img = new Image();
	img.src = "/stats/wgimage.gif?evt=" + evt + ref;
}

jQuery(document).ready(function($) {
    $('.button')
		.each(function(){ $(this).addClass('green').append('<i class="green-btn-icon"></i>') })
		.click(function(event) {
			_gaq.push(['_trackEvent', 'Click on Get Viber button', $(this).data('type'), window.location.href ]);
			(function(link){
				setTimeout(function(){ window.location = link }, 100);
			})( $(this).attr('href'));
			return false;
    	});
});
