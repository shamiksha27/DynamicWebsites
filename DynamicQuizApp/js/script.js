function showTime() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    // AM/PM
    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    // Add 0 if needed
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + ampm;

    document.getElementById("clock").innerText = time;

    // Date
    document.getElementById("date").innerText = date.toDateString();
}

setInterval(showTime, 1000);

function toggleMode() {
    document.body.classList.toggle("light");
}