console.log("Node First Class ");

setTimeout(()=>{
    const user = { id: 1 };
    setTimeout(()=>{
        const products = [ {}, {}, {} ];
        setTimeout(()=>{
                const prices = [];
                setTimeout(()=>{
                        console.log("CallBack Hell Functionality ");    
                }, 500)
        }, 1000 );
    },500);
}, 1000);

console.log("I am Very Exited for This Course ");