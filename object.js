//Object = {}, is a list of items.
var person = {
	firstname: 'John',
	middlename: 'Luke',
	lastname: 'Doe',
	state: 'Benue',
	nationality: 'Nigeria',
	lga: 'Okpokwu',
	age: 27,
	state1: {
		Abia: 1,
		Adamawa: 2,
	},
	myFunction: function forWork(){
		console.log('Identity Verified, he/she can now Vote.');
	}
}
console.log('fullName:' +' ' +person.firstname, person.middlename, person.lastname);
console.log('Nationality:' +' ' +person.nationality);
console.log('State:'+' ' +person.state);
console.log('L.G.A:'+' ' +person.lga);
console.log('Age:'+' ' +person.age);
//console.log(state1.Adamawa);
person.myFunction();


