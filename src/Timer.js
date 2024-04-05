import alarm from './images-site/alarm.png';
import noalarm from './images-site/noalarm.png';
import editalarm from './images-site/edit.png';
import React, { useState, useEffect, useRef } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Timer({timeLimit, setTimeLimit, timeLeft, setTimeLeft}) {
    const [usingTimer, enableTimer] = useState(false);
    const [hasTimeRemaining, setFlagTimeRemaining] = useState(true);
    
    const usingTimerRef = useRef(usingTimer);
    useEffect(() => { usingTimerRef.current = usingTimer })
    const hasTimeRemainingRef = useRef(hasTimeRemaining);
    useEffect(() => { hasTimeRemainingRef.current = hasTimeRemaining })

    useEffect(() => {
        const resetTimer = () => {
            const countdownDiv = document.getElementById("countdown");
            if (countdownDiv != null) {
                countdownDiv.classList.add("time-remaining");
                countdownDiv.classList.remove("out-of-time");
                setFlagTimeRemaining(true);
            }
        };
        const timesUp = () => {
            const countdownDiv = document.getElementById("countdown");
            if (countdownDiv != null) {
                countdownDiv.classList.add("out-of-time");
                countdownDiv.classList.remove("time-remaining");
                setFlagTimeRemaining(false);
            }
        };

        // exit early when we reach 0
        if (!timeLeft) {
            timesUp();
            return;
        }
        else if (!hasTimeRemainingRef.current) {
            resetTimer();
        }
    
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            if (usingTimerRef.current)
                setTimeLeft(timeLeft - 1);
        }, 1000);
    
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }, [timeLeft, setTimeLeft]);

return (
    <div id="timerbox">
        {!usingTimer && (
        <button id="show-timer-button" onClick={() => enableTimer(!usingTimer)} > <img src={alarm} alt="Help"  /></button>
        )}
        {usingTimer && (
        <>
        <button id="hide-timer-button" onClick={() => enableTimer(!usingTimer)} > <img src={noalarm} alt="Help"  /></button>
        <div id="countdown" className="time-remaining">
            <Popup trigger=
                {<button id="edit-timer-button"> <img src={editalarm} alt="Edit"  /></button>}
                modal nested>
                { close => (
                <div id="time-limit-editor" className="popup-modal">
                    <button className="corner-close close" onClick={() => close()}>
                    &times;
                    </button>
                    <div className="popup-editor">
                        <label>Time Limit
                        <input 
                            type="number"
                            value={timeLimit}
                            onKeyPress={e => {
                                if (!/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }}
                            onChange={e => {
                                setTimeLimit(e.target.value);
                                setTimeLeft(e.target.value);
                            }}
                        />
                        </label>
                    </div>
                </div>
            )}
            </Popup>
            {timeLeft}
        </div>
        </>
        )}
    </div>
  );
}

export default Timer;