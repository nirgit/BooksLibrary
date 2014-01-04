// TODO NMO 1/3/14 4:21 PM - example for inheritance!!!!!!!!!!!
// a person "class"
function Person() {

    // // TODO NMO 1/3/14 4:22 PM - NOTE that BaseClasses must be able to init themselves with no-args as well!
	this.init = function(arguments) {
		this.name = arguments[0] ;
		this.age = arguments[1] ;
	}

	this.talk = function() {
		return "Hi I'm " + this.name + ", and I'm " + this.age + " years old!" ;
	}

	this.init(arguments) ;
}



// create a ninja class to extend person!
function Ninja() {

	this.talk = function() {
		return "Hiiiiiii Ya!" + " I am <b>" + this.name + "</b> the Ninja! and I'm " + this.age + " years of age with Dan " + this.dan + "! Shiiii fu" ;
	}

	this.init = function(arguments) {
		this.__proto__.init(arguments) ;
		this.dan = arguments[2] ;
	}

	this.init(arguments) ;
}
Ninja.prototype = new Person() ;


var p1 = new Person("Abbey", 24) ;
var p2 = new Ninja("Casey", 21,3) ;
var p3 = new Ninja("Rachel", 23,4) ;
var p4 = new Person("Lee", 28) ;

var people = [p1, p2, p3, p4] ;

for(var i=0; i < people.length; i+=1) {
	document.writeln(people[i].talk()) ;
	document.writeln("<br>") ;
}

