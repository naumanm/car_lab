// mikeNauman

function Car(make, model, year, state, color, current_owner){
	this.make = make;
	this.model = model;
	this.year = year;
	this.state= "off";
	this.color = color;
	this.current_owner = "Manufacturer";
}

Car.prototype.previousOwners = [];

Car.prototype.passengers = [];

Car.prototype.pick_up = function(name) {
	if (this.state === "on") {
		//console.log("driving to 'pick up '<" + name + ">'");
		this.passengers.push(name);	
	}
};

Car.prototype.sale = function(newOwner){
	// not working not sure why, uncomment and the line
	// below will fail
	//this.previous_owners.push(current_owner);
	this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function() {
	this.state = "on";
};

Car.prototype.off = function () {
	this.state = "off";
};

Car.prototype.driveTo = function (destination) {
	if (this.state === "on") {
		console.log("driving to " + destination);
	}
};

Car.prototype.park = function () {
	if (this.state === "off") {
		console.log("parked!");
	}
};

// don't touch this
module.exports=Car;