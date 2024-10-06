var hour = 0
var minute = 0
var second = 0
var millisecond = 0

var gethour = document.getElementById('hours')
var getmin = document.getElementById('minutes')
var getsec = document.getElementById('seconds')
var getmilli = document.getElementById('milliseconds')
var interval;

function start(){
    interval = setInterval(function(){
        millisecond++
        getmilli.innerHTML = millisecond
        
        if(millisecond>=100){
        second++
        getsec.innerHTML = second
        millisecond = 0
        }
        else if(second >= 59){
        minute++
        getmin.innerHTML = minute
        second = 0
        }
        else if(minute >= 59){
        hour++
        gethour.innerHTML = hour
        minute = 0
        }
    },10)
    document.getElementById('disable1').disabled = true
}

function stop(){
clearInterval(interval)
document.getElementById('disable1').disabled = false
}

function reset(){
hour = 0
minute = 0
second = 0
millisecond = 0

gethour.innerHTML = hour
getmin.innerHTML = minute
getsec.innerHTML = second
getmilli.innerHTML = millisecond
}