
function currTime() {
    let date = new Date();
    
    let hh = date.getHours();
    let mm = date.getMinutes();
    let time = hh + " : " + mm;
    document.getElementById("clock").innerText=time;
    let t = setTimeout(function(){ currTime() }, 1000);

}

currTime();