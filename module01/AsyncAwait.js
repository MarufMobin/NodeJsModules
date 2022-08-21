const promise = new Promise( ( resolve, reject ) =>{
    setTimeout( ()=>{
        resolve("Success! ");
    }, 1000 );
});

async function getData(){
    const res = await promise;
    console.log(res);
}

getData();

fetch("")
    .then( (res) => res.json() )
    .then( (data) => console.log(data) )
    .catch( err => console.log(err) );
    
// Fetch .Catch -> use Kra hoi ar dara Error Show Kranow jai

async function getData(){
    const res = await fetch("");
    const user  = await res.json();

    const res2 = await fetch(`https://www.example.com/${user.id}`);
    const products = res2.json();
    
    console.log(products);

}