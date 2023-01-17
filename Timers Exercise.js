Springboard

Timers Exercise

« Back to Homepage

Timers Exercise
function countDown(time){
  let timer = setInterval(function(){
    time--;
    if(time <= 0){
      clearInterval(timer);
      console.log('DONE!');
    }
    else {
      console.log(time);
    }

  },1000)
}
