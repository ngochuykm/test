// class User {
// 	constructor(firstname,lastname){
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 		this.showName = function() {
// 			console.log(this.firstname + ' ' + this.lastname);
// 		}
// 		console.log('Im Here');
// 	}

// 	// showName(){
// 	// 	console.log(this.firstname + ' ' + this.lastname);
// 	// }
// }

// class Student extends User{
// 	constructor(firstname, lastname,id){
// 		super(firstname,lastname);
// 		this.id = id;
// 	};
// }

// var khoa = new Student('huy','vu',1111);

//test extend function
// var Mammal = function() {
//             this.name = "Mammal";
//         };
 
//         Mammal.prototype = {
//             getName: function () {
//                 return this.name;
//             },
//             setName: function (str) {
//                 this.name = str;
//             }
//         };
 
//         function extend(childClass, parentClass) {
//             childClass.prototype = new parentClass();
//             childClass.prototype.constructor = childClass;
//         };
 
//         var Dog = function() {
//             this.setName("Dog");
//         };
 
//         var Cat = function() {
//             this.setName("Cat");
//         };
 
//         extend(Dog, Mammal);
//         extend(Cat, Mammal);
 
//         var mammal = new Mammal();
//         var cat = new Cat();
//         var dog = new Dog();
 
//         console.log(mammal.getName());
//         console.log(cat.getName());
//         console.log(dog.getName());
//ke thua
// function User(firstname,lastname){
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	console.log(this.lastname);
// }

// var Student = new User();
// var number = [1,2,34,5,6,,6,,42,5,36,46423,5];
// number.forEach(i => console.log(i));
// //this trong arrow function
// var firstname = 'hung';
// var user = {
// 	firstname: 'Khoa',
// 	showName: function(){
// 		console.log(this);
// 	},
// 	logName: () => {
// 		console.log(this)
// 	}
// };
// user.showName();
// user.logName();
// const values = [69,96,1]

// function sum(){
// 	var total = 0;
// 	for (const value of arguments){
// 		total += value
// 	}
// 	return total
// }


// console.log(sum(...values))

// var user = {
// 	age: 18,
// 	showName(name){
// 		console.log(this);
// 		console.log(name)
// 	},

// 	showAddress(address){
// 		console.log(address)
// 	}
// }
// user.showName('Khoa');

//peomise

const posts = [
  {
    content: "I am richest man in the world",
    likes: 51,
    user: "Bill Gates",
    id: 1
  },
  {
    content: "I dropped out of Harvard",
    likes: 5991,
    user: "Mark Zuckerberg",
    id: 2
  },
  { content: "Macbook is so cool!", likes: 391, user: "Steve Jobs", id: 3 }
];

const users = [
  { username: "Bill Gates", age: 61 , userId: 111 },
  { username: "Mark Zuckerberg", age: 33 },
  { username: "Steve Jobs", age: 56 }
];

function findPostById(id) {
  const post = posts.find(post => post.id === id);

  return new Promise((resolve, reject) => {
    setTimeout(function() {
      if (post) {
        resolve(post);
      } else {
        reject("can not find post with id: " + id);
      }
    }, 2000);
  });
}

function queryUserDetail(post){
  const user = users.find( user => user.username === post.user  )
  return new Promise( (resolve,reject) => {
    setTimeout(function() {
      if (user) {
        post.userDetails = user;
        resolve(post);
      } else {
        reject("can not find user of post: " + post);
      }
    }, 2000);
  }  )
  
}

// queryImage 

// queryFollow

// Promise chains >< callback
findPostById(15)
  .then(post =>  queryUserDetail(post)   )
  .then( data => console.log(data)   )
  .catch(err => console.log(err));
