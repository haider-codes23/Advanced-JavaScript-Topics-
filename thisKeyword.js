/const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this ,tag);
    }, this)
  },

}





// //### The first rule

// // - **this** references the object that is executing the current function e.g. if a function is a
// // part of an object we call it a method, so if that function is a method in an object, this references
// // that object itself. Otherwise if that function is a regular function, it’s not part of an object,
// // this references the global object which is the window object in browsers and global in node.

// const video = {
//   title: 'a',
//   play() {
//     console.log(this);
//   }
// }

video.play();

// // // Here when we invoke the play method on the video object it prints the object referenced by
// //  video, because this keyword in the console.log() statement references the video object itself.
// //   By the same token we can add a method later in this object and we’ll get the same result. 

// video.stop = function() {
//   console.log(this);
// }

// video.stop();// Here the this keyword in the console.log stmnt is referencing
// // the video object itself. 

// // ## Second rule

// // - lets delete the stop method and add a regular function called playVideo() { }. If we logged this keyword on to the console we would see the global object window or global in node.
// const video = {
//   title: 'a',
//   play() {
//     console.log(this);
//   }
// }

// video.play();

// function playVideo(obj) {
//   console.log(obj);
// }

// playVideo(video);




// // What if it is a constructor function, we call the constructor function using the new operator. When we use the new operator, this operator creates a new empty object and set’s this in the constructor function to point to the empty object. So here we add the title property to the new object. 
// const video = {
//   title: 'a',
//   play() {
//     console.log(this);
//   }
// }

// video.play();

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// const v = new Video('b');

// // So lets Recap

// // When dealing with regular functions this by default references the global object, but if you call
// //  a function using the new keyword, then this will reference the new empty object.


// // //Lets add another property to our video object e.g. tags and a method called showTags, now this
// //method is a method of the object video, when we use this.tags, this references the video object
// //and .tags returns an array on which we call the forEach method and to forEach method we pass a
// //callback function, the callback function recieves a value from the array on each iteration and
// //then it logs it to the console, but we have a problem here this.title is not returning us the
// //title instead it is returning undefined, although we are inside the video object, the reason
// //why it’s so is because the this keyword is used inside the callback function and this function
// //is just a regular function, it’s not a method in the video object. So this references the
// //global object and the reason why it returned undefined is because global object doesn’t have
// //a property called title. so what we can do is use forEach methods second argument, it takes
// //an object e.g we can pass the this keyword, and then the this keyword in the callback
// //function will reference the video object.


// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     let self = this;
//     this.tags.forEach(function(tag) {
//       console.log(self ,tag)
//     });
//   },

// }





// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     this.tags.forEach(tag => {
//       console.log(this ,tag)
//     });
//   },

// }

// video.showTags();

// function playVideo() {
//   console.log(this);
// }
// let objHouse = {1: "Haba haba"}
// // playVideo.call(objHouse);
// // playVideo.apply(objHouse);
// let vid = playVideo.bind(objHouse);
// playVideo();
// vid();