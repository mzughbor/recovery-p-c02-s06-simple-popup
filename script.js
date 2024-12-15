/* Lesson 19 ... */
// let mahmoud = 0;
//console.log(typeof mahmoud);

const names = ["mahmoud", "aryi", "mary", "lusi"];

// for (mahmoud; mahmoud < names.length; mahmoud++) {
//   console.log(names[mahmoud]);
// }

/* Lesson 28 ... redefine variable inside local scope */
// let age = 25;
// console.log("global age", age);

// if (true) {
//   let age = 30;
//   console.log("local age", age);
// }

/* Lesson 33 ...*/
// Arrow function

// regular function
// const calArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// Arrow function
// const calArea = (radius) => {
//   return 3.14 * radius ** 2;
// }

// const calArea = (radius) => 3.14 * radius ** 2;

// const calArea = radius => 3.14 * radius ** 2;

/* Lesson 35 .. Callbacks and foreach */

// names.forEach((person) => {
//   console.log(person);
// });

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };
// names.forEach(logPerson);

// const ul = document.querySelector("people");

// let html = ``;

// names.forEach((i) => {
//   html += `<li>${i}</li>`;
// });
// console.log(html);

// ul.innerHTML = html;

/* Lesson 40 */
/* Note : we can't use this in arrow function to declare the user blog 
we have to use regular way ...*/
/*
let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
  login: function () {
    // this only working in normal ...
    console.log("the user logged in");
  },
  logBlogs() {
    // shortCut's delete : function ...
    // access the blogs here
    // console.log(this);
    console.log("this user has written these blogs:");
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};
*/

/* Lesson 46 */

//document.querySelector();
//document.querySelectorAll();

// L 47
// document.getElementByTd()
// document.getElementsByName()

/* Lesson 48 */
// let h3 = document.querySelector("h3");
// h3.innerText = "gg";

// .innerHTML = "<h1>..</.."

// L 50
// h3.style.color = "red";

// L 51
// difference between innerText and TextContent
// innerText didn't show the content  hidden by display none for example
// the other one will show it

// L 52
// let title = document.querySelector("h3");

// title.parentElement
// title.children
// title.previousElementSibling
// title.nextElementSibling

// L 53
/*
const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.style.textDecoration = "line-through";
  });
});
*/

// L 55
// e.stopPropagation();

// it's important lecture

// L 56
//addEventListener('copy')
//addEventListener('wheel')

// popup-simple-project

const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target.className === "popup-wrapper") {
    popup.style.display = "none";
  }
});
