// 这个是实现 每个页面上顶端的快捷的back  home  top功能的圆环导航的

$(function(){
	
	$('.socials').mobilyblocks(
		{
		trigger: 'click',
		direction: 'counter',
		duration:500,
		zIndex:50,
		widthMultiplier:1.5
	}
	);
	
	$('.nature').mobilyblocks({
		trigger: 'click',
		direction: 'counter',
		duration:500,
		zIndex:50,
		widthMultiplier:1.15
	});
	
});
