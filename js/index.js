/**
 * 
 * @authors tommy 
 * @date    2017-09-14 8:40:22
 */
 window.onload = function () {
    var html = document.getElementsByTagName("html")[0];
    updateHTMLFontSize(html);
    window.onresize = function () {
        updateHTMLFontSize(html);
    }
}
function updateHTMLFontSize(html) {
    var width = document.documentElement.clientWidth;
    if ( width < 320 ){
    	html.style.fontSize = "42.6667px";
    } else if (  width < 750 ) {
        html.style.fontSize = width * 100 / 750 + "px";
    } else {
        html.style.fontSize = "100px";
    }
}
// news part
(function(){
	var $news = $("#news"),
		$tabs = $news.find($(".tabs li")),
		$con = $news.find($(".mask .conBox")),
		$mask = $news.find($(".mask")),
		$arrow = $news.find($("span")),
		$conli = $news.find($(".mask .conBox li")),
		index = 0,
		len = $tabs.length;

	$tabs.bind( "tap", tab );
	$arrow.bind( "tap", arrow );
	$conli.on( "swipeleft", swipeleft );
	$conli.on( "swiperight", swiperight );
	function tab(){
		index = $tabs.index($(this));
		change(index);
	}
	function arrow(){
		var i = $arrow.index($(this));
		i?index++:index--;
		if(index > 3)index = index % len;
		if(index < 0)index = 3;
		change(index);
	}
	function swipeleft(){
		index--;
		if(index < 0)index = 3;
		change(index);
		return false;
	}
	function swiperight(){
		index++;
		if(index > 3)index = index % len;
		change(index);
		return false;
	}
	function change( index){
		var width = $mask.width();
	    $tabs.eq(index).addClass( "on" ).siblings().removeClass("on");
	    $con.stop().animate({
	    	left: -width*index
	    })
	}
})();
// features part
(function(){
	var $features = $("#features"),
		$slider = $features.find($(".carousel .pic li")),
		$arrow = $features.find($(".carousel span")),
		$tabs = $features.find($(".carousel .tabs li")),
		len = $slider.length,
		index = 0;
		$tabs.bind( "tap", tabs );
		$arrow.bind( "tap", arrow );
		$slider.on( "swipeleft", swipeleft );
		$slider.on( "swiperight", swiperight );
		function arrow(){
			var i = $arrow.index($(this));
			i?index++:index--;
			if(index > 3)index = index % len;
			if(index < 0)index = 3;
			change(index);
		}
		function tabs(){
			index = $tabs.index($(this));
			change(index);
		}
		function swiperight(){
			index --;
			if(index < 0)index = 3;
			change(index);
			return false;
		}
		function swipeleft(){
			index ++;
			if(index > 3)index = index % len;
			change(index);
			return false;
		}
		function change(index){
			var lIndex = index == 0?3:index-1,
				rIndex = index == 3?0:index+1;
			$tabs.eq(index).addClass( "on" ).siblings().removeClass("on");
			$slider.removeClass("leftSide midSide rightSide");
			$slider.eq(index).addClass( "midSide" );
			$slider.eq(lIndex).addClass( "leftSide" );
			$slider.eq(rIndex).addClass( "rightSide" );
		}
})();
(function(){
	var $forum = $("#forum"),
		$tabs = $forum.find($(".tabs li")),
		$con = $forum.find($(".mask .conBox")),
		$mask = $forum.find($(".mask")),
		$conli = $forum.find($(".mask .conBox li")),
		index = 0,
		len = $tabs.length;

	$tabs.bind( "tap", tab );
	$conli.on( "swipeleft", swipeleft );
	$conli.on( "swiperight", swiperight );
		function tab(){
		index = $tabs.index($(this));
		change(index);
	}
	function swipeleft(){
		index--;
		if(index < 0)index = 2;
		change(index);
		return false;
	}
	function swiperight(){
		index++;
		if(index > 2)index = index % len;
		change(index);
		return false;
	}
	function change( index){
		var width = $mask.width();
	    $tabs.eq(index).addClass( "on" ).siblings().removeClass("on");
	    $con.stop().animate({
	    	left: -width*index
	    })
	}
})();
// footer back to top
(function(){
	$btt = $("footer .backToTop");
	$btt.bind( "tap", function(){
		$("body,html").animate({
            scrollTop : 0
        },300);
	} );
})();
