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
	if (this.state == "on"){
		this.passengers.push(name);
	}
};

Car.prototype.dropOff =function(name){
	if (this.state == "on"){
		this.passengers.splice(name);
	}
	else{
		return("Are you crazy? You can only throw " + name + "out while the car is on. That's how the test was written.");
	}
};

Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
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