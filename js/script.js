let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
    let date = new Date();
    
    // Getting only hours, minutes and seconds from the Date object
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let hRotation = (hh * 30) + (mm * 0.5);
    let mRotation = (mm * 6);
    let sRotation = (ss * 6);

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}



setInterval(displayTime, 1000);