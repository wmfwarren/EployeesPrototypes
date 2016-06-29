///***Employee Information***\\\\\

var Employee = function () { //employee prototype
	this.firstName = null;
	this.lastName = null;
	this.officeLocation = null;
};

var Clinician = function() {
	this.expertise = null;
};
Clinician.prototype = new Employee();

var Operations = function() {
	this.responsibility = null;
};

var employee__001 = new Clinician();
employee__001.firstName = "Michelle";
employee__001.lastName = "Jordan";
employee__001.expertise = "Psycho-Cryptology";

var employee__002 = new Clinician();
employee__002.firstName = "Jimmy";
employee__002.lastName = "John";
employee__002.expertise = "Prosthesis";

var employee__003 = new Operations();
employee__003.firstName = "Mr";
employee__003.lastName = "Bean";
employee__003.responsibility = "Jester";

var employee__004 = new Operations();
employee__004.firstName = "Captain";
employee__004.lastName = "Marvel";
employee__004.responsibility = "Super-heroine";

/////***Departmental Information***\\\\\
var Department = function() {
	this.deptartmentName = null;
};

var FieldOffice = function() { // field office prototype
	this.location = null;
};
FieldOffice.prototype = new Department();

var southEastRegional = new FieldOffice();
southEastRegional.location = "New Jersey"; //why is it in NJ?!?!
southEastRegional.deptartmentName = "Prosthesis";

var northWestRegional = new FieldOffice();
northWestRegional.location = "Portland";
northWestRegional.deptartmentName = "Super Science";

var Headquarters = function() {
	this.mainLocation = null;
};
Headquarters.prototype = new Department();
var northAmericanHQ = new Headquarters();
northAmericanHQ.mainLocation = "Bucksnort, Tennessee";
northAmericanHQ.deptartmentName = "Administration";

employee__001.officeLocation = northAmericanHQ;
employee__002.officeLocation = northWestRegional;
employee__003.officeLocation = northWestRegional;
employee__004.officeLocation = southEastRegional;

console.log(employee__001);
console.log(employee__002);
console.log(employee__003);
console.log(employee__004);

