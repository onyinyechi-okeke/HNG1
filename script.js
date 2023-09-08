
const now = new Date();
let days = ['sunday', 'monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = days[ now.getDay() ];
document.getElementById("day").innerHTML= day;

const hours = now.getHours() -1;
const hour = hours*3600000
const min = now.getMinutes()*60000 ;
const sec = now.getSeconds()*1000;

document.getElementById("time").innerHTML= hour+min+sec;