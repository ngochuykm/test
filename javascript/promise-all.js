
// const avatarPromise = new Promise( (resolve) => {
//   setTimeout( function(){
//     const result = { 
//       url: "http://facebook.com/user/image12314",
//       status: 'OK'
//    };
//     resolve(result)
//   } , 2000 )
// })
// const coverImagePromise = new Promise(resolve => {
//   setTimeout(function() {
//     resolve("http://facebook.com/user/cover/image1");
//   }, 1000);
// });

// const coverImagePromise2 = new Promise(resolve => {
//   setTimeout(function() {
//     resolve("http://facebook.com/user/cover/image2");
//   }, 3000);
// });

// const coverImagePromise3 = new Promise(resolve => {
//   setTimeout(function() {
//     resolve("http://facebook.com/user/cover/image3");
//   }, 2500);
// });

// // then( data1 ). then( data ).then( )

// Promise.all([
//   coverImagePromise,
//   coverImagePromise3,
//   avatarPromise,
//   coverImagePromise2
// ]).then(responses => console.log(responses));


const evolutionChainPromise = fetch(
  "http://pokeapi.co/api/v2/evolution-chain/?limit=200&offset=100"
);
const typePromise = fetch("http://pokeapi.co/api/v2/type/3/");

Promise.all([evolutionChainPromise, typePromise])
  .then(responses => {
    return responses.map( element => element.json()  )
  } )
  .then( data => console.log(data) )
  .catch( err => console.log(err)  )