
app.service("blueservice", function(){
	this.bcount = 100;
	var self =this;
	
	this.bdecrease = function() {
		self.bcount--;

		return self.bcount;

	}
	
	this.blueClick = function() {
		self.bcount++;
		return self.bcount;
	
	}
	
	this.blueReset = function() {
			return self.bcount =100;	
	
	}
});
	
app.service("redservice", function(){
	this.rcount = 100;
	var self =this;
	
		this.rdecrease = function() {
		self.rcount --;

		return self.rcount;
		}
	
	this.redClick = function() {
				
		self.rcount ++;
		return self.rcount;	
		
	}
		
	this.redReset = function() {
			return self.rcount =100;	
	}
	}
	
})

