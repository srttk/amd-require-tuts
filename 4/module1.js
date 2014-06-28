define(['4/module2'],function(job){
	var User=function(){
		this.getName=function(){
			return "Sarath";
		},
		this.profile=function(){
			var j=new job(); 
			return this.getName()+' is working as a '+j.getJob();
		}
	}
	return User;
});