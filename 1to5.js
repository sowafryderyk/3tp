let i = 0;
let intervalId = setInterval(()=>{
    console.log(i++);
    if(i==6) clearInterval(intervalId);
},1000)