const delaycolor=(color, delay)=>{
   return new Promise((success, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            success();
        }, delay)
    })
}

async function rainbow(){
    await delaycolor('red', 1000)
    await delaycolor('orange', 1000)
    await delaycolor('yellow', 1000)
    await delaycolor('green', 1000)
    await delaycolor('blue', 1000)
    await delaycolor('indigo', 1000)
    await delaycolor('violet', 1000)
    return "all done"
}  

rainbow().then(()=>"end of rainbow")
