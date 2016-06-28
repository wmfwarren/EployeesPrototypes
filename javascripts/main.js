var Employee = () => { //employee prototype
	this.firstName = null;
	this.lastName = null;
}

var Clinician = () => {
	
}
Clinician.prototype = new Employee();

var Operations = () => {

}
Operations.prototype = new Employee();

var Department = () => {

}

var FieldOffice = () => { // field office prototype

}
FieldOffice.prototype = new Department();

var Headquarters = () => {

}
Headquarters.prototype = new Department();