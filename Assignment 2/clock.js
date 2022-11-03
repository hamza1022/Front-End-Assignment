// The Function newDate() gives us the current date and time 
// The getHours() method returns the hour for the specified date, according to local time
// The getMinutes() method returns the minutes in the specified date according to local time
// The getSeconds() method returns the seconds in the specified date according to local time  



 function displayTime (){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds(); 

    let todaydate = date.toDateString();;
   

    // let format = "AM";

    

    // if(hours>= 12){

    //     format = "PM";

    // }
    // else {
    //     format = "AM";
    // }
    let format = hour >=12 ? "PM" :  "AM";

     hour = hour >12 ? hour - 12 : hour;


    // if(hours>12){

    //     hours = hours - 12;

    // }
    // if (hours <10){
    //     hours = "0" + hours ;
    // }
    // if ( minutes < 10){
    //     minutes=  "0" + minutes;

    // }
    // if ( sec < 10){
    //     sec=  "0" + sec;

    // }
     hour = hour <10 ? "0"+ hour : hour;
     min = min <10 ? "0"+min : min;
     sec = sec <10 ? "0"+ sec : sec;



    // document.getElementById("format").innerHTML = format;

    document.getElementById("clock").innerHTML = hour +  ":"  + min + ":" + sec ;
    document.getElementById("format").innerHTML = format;
    document.getElementById("todayDate").innerHTML=todaydate;
    console.log(todaydate);
    

 }

 setInterval(displayTime,1000);
