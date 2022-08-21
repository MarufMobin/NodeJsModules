//Promice State

//Pending State
//Resolved State
//Rejected State

//Create A Object Via Constractor 
// const myPromice = new Promise( (resolve, reject) =>{
//     const user = {id: 1};
//     if( !user ){
//         reject("Something Went Wrong");
//     }else{
//         setTimeout(()=>{
//             resolve("SuccessFully Got Data");
//         },1000);
//     }
// });

const myPromice = new Promise( (resolve, reject) =>{
    const user = {id: 1};
    if( !user ){
        reject("Something Went Wrong");
    }else{
        setTimeout(()=>{
            resolve({ name: "Maruf Mobin" });
        },1000);
    }
});

// Multiple Asyncronus Work --> Problem for Asyncronus and Syncronus

// const userIds = [ 1, 2, 3, 4, 5 ];
// let userData = [];
// for( let i = 0; i < userIds.length; i++ ){
//     const userId = userIds[i];
//     setTimeout( () =>{
//         userData.push( {id : userId} );
//     }, 500 );
// }

const userIds  = [ 1, 2, 3, 4, 5 ];
let userData = [];
for( let i = 0; i < userIds.length; i++ ){
    userData.push(myPromice);
}

Promise.all(userData).then( res => {
    console.log(res);
})

//Promice Conzume -> data thake ki Pelam ta hoche Conzume
//Promice Constractor ar 3 ta method thake 1, Catch 2, Finally 3, then 
// jodi data resolve pai tile ( then  ) a pabo -> jodi know error hoi tile (Catch a error pabo ) -> jodi 
myPromice
    .then( res => console.log( res ))
    .catch( err => console.log( err ))