const DateTime = () => {
    const now = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getUTCDay()];
    document.getElementById("day").innerHTML = day;

    const utcMilliseconds = now.getTime();
    document.getElementById("time").innerHTML = utcMilliseconds;
}

// Call DateTime immediately to initialize
DateTime();

// Update every second
setInterval(DateTime, 1000);