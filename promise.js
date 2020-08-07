function promiseExample(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(true){
                resolve('I am resolved.');
            }else{
                reject('I am rejected.');
            }
        },3000);
    })
}

promiseExample().then((res)=>{
    console.log(res);
})