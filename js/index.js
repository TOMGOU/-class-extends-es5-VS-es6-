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
// oop
/* (function(win){
	function Play($tabs,$con,$mask,$conli){
		this.$tabs = $tabs;
		this.$con = $con;
		this.$mask = $mask;
		this.$conli = $conli;
		this.len = $tabs.length;
		this.index = 0;
	};
	Play.prototype = {
		exec : function(){
			this.addEvent();
		},
		addEvent : function(){
			var This = this;
			this.$tabs.bind( "tap", function(){
				This.index = This.$tabs.index($(this));
				This.width = This.$mask.width();
	   			This.$tabs.eq(This.index).addClass( "on" ).siblings().removeClass("on");
				This.$con.stop().animate({
			    	left: -This.width*This.index
			    })
			} );
			this.$conli.on( "swiperight", function(){
				This.index--;
				if(This.index < 0)This.index = This.len-1;
				This.width = This.$mask.width();
	   			This.$tabs.eq(This.index).addClass( "on" ).siblings().removeClass("on");
				This.$con.stop().animate({
			    	left: -This.width*This.index
			    })
				return false;
			} );
			this.$conli.on( "swipeleft", function(){
				This.index++;
				if(This.index > This.len-1)This.index %= This.len;
				This.width = This.$mask.width();
	   			This.$tabs.eq(This.index).addClass( "on" ).siblings().removeClass("on");
				This.$con.stop().animate({
			    	left: -This.width*This.index
			    })
				return false;
			} );
		} 
	};

	function Arrowplay($tabs,$con,$mask,$conli,$arrow){
		Play.call(this,$tabs,$con,$mask,$conli);
		this.$arrow = $arrow;
		this.len = $tabs.length;
		this.index = 0;
	}
	//prototype inhert
	function Fn(){};
	Fn.prototype = Play.prototype;
	Arrowplay.prototype = new Fn();
	//extend
	Arrowplay.prototype.start = Arrowplay.prototype.exec;
	Arrowplay.prototype.exec = function(){
		this.start();
		this.arrow();
	};
	Arrowplay.prototype.arrow = function(){
		var This = this;
		this.$arrow.bind( "tap", function(){
			var num = This.$arrow.index($(this));
			num?This.index++:This.index--;
			if(This.index > This.len-1)This.index %= This.len;
			if(This.index < 0)This.index = This.len-1;
			This.width = This.$mask.width();
   			This.$tabs.eq(This.index).addClass( "on" ).siblings().removeClass("on");
			This.$con.stop().animate({
		    	left: -This.width*This.index
		    })
		} );
	};
	win.Play = Play;
	win.Arrowplay = Arrowplay;
})(window); */

//es6 oop
(function(win){
	class Play{
		constructor($tabs,$con,$mask,$conli){
			this.$tabs = $tabs;
			this.$con = $con;
			this.$mask = $mask;
			this.$conli = $conli;
			this.len = $tabs.length;
			this.index = 0;
		}
		exec(){
			this.addEvent();
		}
		addEvent(){
			var This = this;
			this.$tabs.bind( "tap", function(){
				This.index = This.$tabs.index($(this));
				This.width = This.$mask.width();
	   			This.$tabs.eq(This.index).addClass( "on" ).siblings().removeClass("on");
				This.$con.stop().animate({
			    	left: -This.width*This.index
			    })
			} );
			this.$conli.on( "swiperight", function(){
				This.index--;
				if(This.index < 0)This.index = This.len-1;
				This.width = This.$mask.width();
	   			This.$tabs.eq(This.index).addClass( "on" ).siblings().removeClass("on");
				This.$con.stop().animate({
			    	left: -This.width*This.index
			    })
				return false;
			} );
			this.$conli.on( "swipeleft", function(){
				This.index++;
				if(This.index > This.len-1)This.index %= This.len;
				This.width = This.$mask.width();
	   			This.$tabs.eq(This.index).addClass( "on" ).siblings().removeClass("on");
				This.$con.stop().animate({
			    	left: -This.width*This.index
			    })
				return false;
			} );
		} 
	}
	//extends
	class Arrowplay extends Play{
		constructor($tabs,$con,$mask,$conli,$arrow){
			super($tabs,$con,$mask,$conli,$arrow)
			this.$arrow = $arrow;
		}
		exec(){
			super.exec()
			this.arrow()
		}
		arrow(){
			var This = this;
			this.$arrow.bind( "tap", function(){
				var num = This.$arrow.index($(this));
				num?This.index++:This.index--;
				if(This.index > This.len-1)This.index %= This.len;
				if(This.index < 0)This.index = This.len-1;
				This.width = This.$mask.width();
				   This.$tabs.eq(This.index).addClass( "on" ).siblings().removeClass("on");
				This.$con.stop().animate({
					left: -This.width*This.index
				})
			} );
		};
	}
	win.Play = Play;
	win.Arrowplay = Arrowplay;
})(window);

// news part
(function(){
	var $news = $("#news"),
		$tabs = $news.find($(".tabs li")),
		$con = $news.find($(".mask .conBox")),
		$mask = $news.find($(".mask")),
		$arrow = $news.find($("span")),
		$conli = $news.find($(".mask .conBox li")),
		index = 0,
		len = $tabs.length,
		/* arr = new Play($tabs,$con,$mask,$conli);
		arr.exec(); */

		//with arrow function
		arrplay = new Arrowplay($tabs,$con,$mask,$conli,$arrow);
		arrplay.exec();
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
		noarr = new Play($tabs,$con,$mask,$conli);
		noarr.exec();
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
