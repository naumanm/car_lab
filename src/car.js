function Car(make, model, year, state, color, current_owner, passengers){
	this.make = make;
	this.model = model;
	this.year = year;
	this.state= off;
	this.color = color;
	this.current_owner = "Manufacturer";
	this.passengers = passengers;
}

Car.prototype.previous_owners = [];

Car.prototype.sale = function(newOwner){
	this.previous_owner.push(newOwner);
	this.newOwner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = this.state(on);

Car.prototype.off = this.state(off);




module.exports=Car;