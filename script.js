const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



function runClock(){
    
    var date = new Date();
    
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    console.log("hr - " + hr + "min" + min + "sec" + sec);
    let hrPos = (hr*30)+(min * (360/60)/12);
    let minPos = (min*360/60) + (sec*(360/60)/60);
    let secPos = (sec*360/60);
    

    // hrPos = hrPos + (3/360);
    // minPos = minPos + (6/60);
    // secPos = secPos + 6;

    HOURHAND.style.transform = "rotate("+hrPos + "deg)"
    MINUTEHAND.style.transform = "rotate("+minPos + "deg)"
    SECONDHAND.style.transform = "rotate("+secPos + "deg)"

}    

setInterval(runClock,1000);