(function($){
	// 준비중
	$.prototype.Comingsoon = function(){
		this.each(function(){
			var _this = $(this);
			_this.click(function(e){
				e.preventDefault();
				alert('준비중입니다.')
			})
		})
		return this;
	};
	// 페이지상단으로 이동
	$.prototype.scrollAni = function( option ){
		var defaults = {
            selecter : ".toTop",
            speed : 400
         },
         o = $.extend(null, defaults, option);
		this.each(function(index){
			$(window).scroll(function(){
				var bodySc = $('body').scrollTop();
				if(bodySc >= 100){
					$(o.selecter).fadeIn();
				}else{
					$(o.selecter).fadeOut();
				}
			});
			$("body").on("click", $(o.selecter), function(e){
				//e.preventDefault();
				$("body").animate({scrollTop : 0}, o.speed);
			});
		});
		return this;
	};
})($)

$(window).load(function(){
	$("a.coming").Comingsoon();
	$(".toTop").scrollAni();
});
