require(['js/libs/jquery','js/libs/text!5/templates/menu.html'],function(jQuery,menuTpl){
	console.log(menuTpl);
	$('body').html(menuTpl);
});