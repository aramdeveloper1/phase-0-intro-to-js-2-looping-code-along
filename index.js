// // for (let age = 30; age < 40; age++) {
// //    console.log(`I'm ${age} years old. Happy birthday to me!`);
// //    debugger;
// // }
// const names = ["Ali", "Aram", "Akam"];
// const birthday = "birthday";
// function wrapGifts(names, birthday) {
//    for (let i = 0; i < names.length; i++) {
//       console.log(`thank you ${names[i]} and added a bow!, ${birthday}`);
//       debugger
//    }
//    return names
// }
// wrapGifts(names, birthday)


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//    let i = 0; // the initialization moves OUTSIDE the body of the loop!
//    while (i < gifts.length) {
//       console.log(`Wrapped ${gifts[i]} and added a bow!`);
//       i++; // the iteration moves INSIDE the body of the loop!
//    }

//    return gifts;
// }

// wrapGifts(gifts);
// // LOG: Wrapped teddy bear and added a bow!
// // LOG: Wrapped drone and added a bow!
// // LOG: Wrapped doll and added a bow!
// // => ["teddy bear", "drone", "doll"]
const num = 10
function countDown(num) {
   let i = 0;
   while (num >= i) {
      console.log(num)
      num--;
   }
}
countDown(num)