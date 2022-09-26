function logDetails (uid:number, item:string){
    console.log(`A product with ${uid} has a little as ${item}.`);
}

function logInfo (uid:number|string, user: string){
    console.log(`An user with ${uid} has a name as ${user}.`);
}

logDetails (123, "Gabriel");
logInfo (123, "Gabriel");
logInfo ("123", "Gabriel");