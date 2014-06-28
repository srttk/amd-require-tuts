require(['4/module1','js/libs/jquery'],function(mod1){

	var m=new mod1();
	console.log(m.getName());
	$('body').html(m.profile());

});