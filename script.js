
const countdownDate = new Date("december 08, 2024 03::17:25").getTime(); 

let x = setInterval(() => {

    const today = new Date().getTime(); 
    let distance = countdownDate - today; 

 
    if (distance <= 0) {
        clearInterval(x); 
        document.getElementById("countdown").innerHTML = "EXPIRED";
    } else {
        let days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
        let seconds = Math.floor((distance % (1000 * 60)) / 1000); 

      
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }

}, 1000);



