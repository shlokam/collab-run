import React, { useState, useEffect } from "react";
function Countdown(){
    const [days,setDays] = useState(10);
    const [hours,setHours] = useState(10);
    const [minutes,setMinutes] = useState(10);
    const [seconds,setSeconds] = useState(10);

    const countdown = () =>{
        // const endDate = new Date("August 06, 2023 06:00:00").getTime();
        const endDate =  new Date(2023, 7, 6, 6, 0, 0).getTime();
        const today = new Date().getTime();

        // console.log("today's date " + new Date());
        const timeDiff = endDate - today;

        const seconds = 1000;
        const minutes = seconds*60;
        const hours = minutes*60;
        const days = hours*24;

        let timeDays = Math.floor(timeDiff / days)
        let timeHours = Math.floor((timeDiff % days) / hours)
        let timeMinutes = Math.floor((timeDiff % hours) / minutes)
        let timeSeconds = Math.floor((timeDiff % minutes) / seconds)
  
        timeHours = timeHours < 10 ? "0" + timeHours : timeHours
        timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
        timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds
  

        setDays(timeDays);
        setHours(timeHours);
        setMinutes(timeMinutes);
        setSeconds(timeSeconds);
    }

    useEffect(()=>{
        setInterval(countdown,1000);
    })
    return (
        <div className="container">
            <h1 className="textCountdown">We are waiting to see YOU!</h1>
            <div className="countdown">
                <article>
                    <p>{days}</p>
                    <h3>Days</h3>
                </article>
                <article>
                    <p>{hours}</p>
                    <h3>Hours</h3>
                </article>
                <article>
                    <p>{minutes}</p>
                    <h3>Minutes</h3>
                </article>
                <article>
                    <p>{seconds}</p>
                    <h3>Seconds</h3>
                </article>
            </div>
        </div>
    )
}

export default Countdown;