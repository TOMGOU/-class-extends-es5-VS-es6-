
es5 oop class 

(function(win){
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
})(window);


es6 oop class and extends

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