const DateTime = () => {
const now = new Date();
let days = ['sunday', 'monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = days[ now.getDay() ];
document.getElementById("day").innerHTML= day;


const say= now.getTime()
document.getElementById("time").innerHTML= say;
}

DateTime();
setInterval(DateTime, 1000);