function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!false){
                resolve([
                    {'key':'Name', 'value':'Rajeev Ranjan'},
                    {'key':'Name', 'value':'Shaurya Singh'},
                    {'key':'Name', 'value':'Lucky Singh'}
                ]);
            }else{
                reject('Oops, something is went wrong!');
            }
            
        },2000)
    })
}

function fetchData(){
    getData()
    .then((res)=>{
        let list='';
        document.getElementById('loading').style.display='none'
        console.log('Response from promise: '+ JSON.stringify(res));
        res.forEach(element => {
            list += `<li>${element.key}:${element.value}</li>`
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}


async function printData(){
    console.log('1 statement');
    try{
        const data = await getData();
        console.log(data);
        const data1 = await getData();
        console.log(data1);
    }
    catch(err){
        console.log(err)
    }
    
    console.log('3 statement');
}
printData();