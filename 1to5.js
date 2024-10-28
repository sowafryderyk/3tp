let i = 0;
// let intervalId = setInterval(()=>{
//     console.log(i++);
//     if(i==6) clearInterval(intervalId);
// },1000);

//nowa funkcja wyswietla czas co sekunde
function addZero(num){
    return (num<10) ? '0' + num : num
}
setInterval( ()=>{
    let data = new Date();
    console.clear();
    console.log(addZero(data.getHours()) +" : "+ addZero(data.getMinutes()) +" : "+ addZero(data.getSeconds()));
},1000)