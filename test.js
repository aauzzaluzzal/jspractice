const promise1 = new promise((resolve, reject)=>{
    let completedPromise1 = true;
    if(completedPromise1){
        resolve("completed promise 1");
    }else{
        reject("completed promise 1");
    }
    
});
const promise2 = new promise((resolve , reject)){
    resolve("completed promise 2");
}
promise1.then((res) =>console.log(res));
promise2.then((res) =>console.log(res));
promise1.catch((err) => console.log);

console.log("welcom");
console.log("end");
