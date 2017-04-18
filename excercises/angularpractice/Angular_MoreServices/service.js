var app = angular.module("myApp");
app.service("moreservice", function(){
	this.lists =[];
	var self =this;
	
	this.submit = function(info) {
		self.lists.push(info);
		return self.lists;
	}
	
});

//app.service("blueservice", function(){
//	this.bcount = 100;
//	var self =this;
//	
//	this.bdecrease = function() {
//		self.bcount--;
//
//		return self.bcount;
//
//	}
//	
//	this.blueClick = function() {
//		self.bcount++;
//		return self.bcount;
//	
//	}
//	
//	this.blueReset = function() {
//			return self.bcount =100;	
//	
//	}
//});