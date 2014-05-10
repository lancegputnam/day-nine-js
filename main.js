//This following are four variables, for four different students with age and test scores.//
var studentOne = {
	name: "Rick",
	middlename: "Brick",
	lastname: "Smith",
	age: 18, 
	midtermexam: 80,
	finalexam: 92,
	totalhours: 80,
	projects: ["Management", "Operations", "Accounting"],
	plan: {
			category: "Management",
			projecttype: [
				{ name: "one", score: 90},
				{ name: "two", score: 92},
			]
	}
};

var studentTwo = {
	name: "Susie",
	middlename: "Susan",
	lastname: "San",
	age: 20, 
	midtermexam: 86,
	finalexam: 94,
	totalhours: 85,
	projects: ["Management", "Service", "Venture"],
	plan: {
			category: "Serivce",
			projecttype: [
				{ name: "one", score: 80},
			]
	}
}

var studentThree = {
	name: "James",
	middlename: "Lob",
	lastname: "Law",
	age: 22, 
	midtermexam: 94,
	finalexam: 79,
	totalhours:60,
	projects: ["Innovation", "Operations", "Accounting"],
	plan: {
			category: "Innovation",
			projecttype: [
				{ name: "one", score: 89},
			]
	}
}

var studentFour = {
	name: "Jane",
	middlename: "Janie",
	lastname: "June",
	age: 21, 
	midtermexam: 81,
	finalexam: 85,
	totalhours: 75,
	projects: ["Management", "Creativity", "Law"],
	plan: {
			category: "Creativity",
			projecttype: [
				{ name: "one", score: 99},
			]
	}
}

//This is a function that takes put out the total of how ever many number of test scores are given and provides the average//
function average (array) {
	var total = array.reduce(function(first, second) { //instead of first and second, they could be X and Y
		return first + second
	})
	console.log('total is', total);

	return total / array.length;
}

//In console, enter the four midterm test scores//
average ([80, 86, 94, 81]) 
//The average midterm exam score is 85.25//

//In console, enter the four final exam test scores//
average ([92, 94, 79, 85])
//The average final exam score is 87.5//

//In console, enter the four ages to recieve the average//
average ([18, 20, 22, 21])
//The average age in the class is 20.25//

//This function shows how much the score difference. X is the final exam score and y is the midterm exam score//
var studentOne = {
	name: function(x,y) {
		return x - y
	}
}

//This return back a score difference of 12. 
studentOne.name(92,80)

//This function shows how much the score increased from the midterm to the final exam. The function divides
// x and y and multiplies times ten to get the number as a percent. Ex. for studentOne, their midterm 
//to final exam score increased by 11.5%
var studentOne = {
	name: function(x,y) {
		return (x / y) * 10
	}
}

//For the increase in a percentage. This students score increased by 11.5%
studentOne.name(92,80)

//This function will create an abbreviation of the students names. 
function abbreviateName (first, middle, last) { 
	return first [0] + middle [0] + last [0]; 
}

//This will put out the initials "RBS"
abbreviateName ("Rick", "Brick", "Smith")

//This is a var array 
var array = [80, 92, 86, 94, 94, 79, 81, 85];

//This pops out the length of the above array, which is 8. 
array.length

//This push shows that there are four students in the class 
var students = [];
	students.push("rick", "susie", "james", "jane");

//This function returns that total number of hours that were put in by the students on their final 
//projects. Type total into the console and the number is 300 
var total = [80, 85, 60, 75].reduce(function(a, b) {
    return a + b;
});

//This will pop out that The student with the highest score is Susie, with a score of 94.  
console.log ("The student with the highest grade is", studentTwo.name , "with a  score of" , studentOne.finalexam);

//This will point out the first object from the array of the projects from StudentOne
studentOne.projects[0]

//This will point out the second object from the array
studentOne.projects[1]

var students = [
	{name: 'rick'},
	{name: 'susie'},
	{name: 'james'},
	{name: 'jane'},
]

students.forEach(function(student) {
 console.log(student.name);
})

["rick", "susie", "james", "jane"].map(function(names) {
     return names.length;
})

["rick", "susie", "james", "jane"].map(function(names) {
     return "Dr." + names;
})

//This reduce function adds the total number of hours spent on the final project by the students.//
[80,85,60,75].reduce(function(x,y){
 return x + y
})

[80,85,60,75].reduce(function(x,y){
 return x - y;
})

var grades = [92, 94, 79, 85] 

grades.map(function(x, index){
 return x + index;
})

//This map function will add five to each of the numbers(grades) within the grade array. 
grades.map(function(x, index){
 return x + 5;
})

//The following code logs a line for each element in an array
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

[80, 85, 60, 75].forEach(logArrayElements);

//The following code logs a line for each element in an array with "grade of" added
function logArrayElements(element, index, array) {
    console.log("a[" + "grade of" + "] = " + element);
}

[80, 85, 60, 75].forEach(logArrayElements);

//This for function and forEach statement adds 10% to the four grades below. 
function grade(x) { console.log(x * 1.10) }

[80,85, 60, 75].forEach(grade)

//This forEach function puts out the following four grades in a list
[80, 85, 60, 75].forEach(function(x){
  console.log(x);
})

//This function sorts the grades from lowest to highest. 
var a = [ 80, 85, 60, 75, 95, 94, 82];
a.sort(function(a,b) { return a - b; });

//This forEach statement add the hours together that were spent on the projects. 
var hours = [60, 50, 70, 40];

var sum = 0;
hours.forEach(
    function addNumber(value) { sum += value; }
);

document.write(sum);

//This is for a filtered function. It picks out the grades that are greater than or equal to 90.
function gradesOfA(element) {
  return element >= 90;
}

var filtered = [80, 92, 80, 90, 92, 86, 94, 85, 80, 94, 79, 82, 89, 75].filter(gradesOfA);

//This is for a forEach function that list out the elements in the array
var myArray = [79, 82, 89, 75];

myArray.forEach(function (element) {
    console.log(element);
});

//This filter points out the even numbers that are in the array. 
var myArray = [80, 92, 85, 79, 80, 82, 79, 86, 75, 94];

var evenNumbers = myArray.filter(function (x) {
    return x % 2 == 0;
});

//This filter will point out the odd numbers in the array 
var myArray = [80, 92, 85, 79, 80, 82, 79, 86, 75, 94];

var oddNumbers = myArray.filter(function (x) {
    return x % 2 == 1;
});

//This map will square the numbers in the array 
var myArray = [2, 3, 4, 5];

var squared = myArray.map(function (x) {
    return x * x;
});

//This forEach function will also list out the students names 
var a = ["Rick", "Susie", "James", "Jane"];
a.forEach(function(entry) {
    console.log(entry);
});

//This map function adds six to each of the students scores and gives back an array of objects
[80,94,79,84].map(function(x){ return {score: x + 6}; })

//This is a reduce function adds the students ages together outputs a sentence with the sum of the ages 
var students = [
    { name: "Rick", age: 18 },
    { name: "Susie", age: 20 },
    { name: "James", age: 22 },
    { name: "Jane", age: 21 }
], age = 0;

age = students.reduce(function(memo, student) {
    return memo + student.age; // return previous total plus current age
}, 0);

console.log("The sum of all the students ages is " + age); 

//This is objects within an array. It is a list of teachers and the year they began and ended a program they taught in. 
var teachers = [
    { number: 1,  name: "Rick Run",      		begin: 1994, end: 1997 },
    { number: 2,  name: "Susie San",     		begin: 1995, end: 1999 },
    { number: 3,  name: "James Smith",          begin: 2000, end: 2005 },
    { number: 4,  name: "Tom Bluth",            begin: 2001, end: 2005 },
    { number: 5,  name: "Bob Loblaw",         	begin: 2004, end: 2010 },
    { number: 6,  name: "Stefan Sylvester",     begin: 2006, end: 2013 },  
];

//This filter selects the teachers in the list that began teaching in 2000 or later and selects them out. 
teachers = teachers.filter(function(teacher) {
    return teacher.begin >= 2000; // if began in 2000, keep in the list
});

//In this, I added onto the filter with a map. The map created four objects with the teacher name, who the course
//was taught by and the number of years that were taught (based on the beginning and end years)
teachers = teachers.filter(function(teacher) {
    return teacher.begin >= 2000;
}).map(function(teacher) {
    return { 
        teacherNumber: "#" + teacher.number,
        taughtBy: teacher.name,
        yearsTaught: teacher.end - teacher.begin
    };
});

 
