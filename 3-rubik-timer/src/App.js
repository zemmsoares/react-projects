import { useState, useEffect, useRef } from 'react';
import Timer from './Timer.jsx';
import React from 'react'

function App() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState('');
    const [rec,setRec] = useState([]);


    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }
    }, [isActive, isPaused])

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    const handleStop = () => {
        setIsActive(false);
        setIsPaused(true);

    }

    function useKeyPress(targetKey) {
        const [keyPressed, setKeyPressed] = useState(false);
        const keyPressedRef = useRef();

        const [oddUp, setOddUp] = useState(false);
        const [oddDown, setOddDown] = useState(false);
        const oddUpRef = useRef();
        const oddDownRef = useRef();
        
        
        useEffect(() => {
            keyPressedRef.current = keyPressed;
            oddUpRef.current = oddUp;
            oddDownRef.current = oddDown;
            //setRec(rec => [...rec,time]);
            console.log(time);
            if(oddDown === false && keyPressed === true){setRec(rec => [...rec,time])}
            console.log("keyPressed", keyPressed);
        }, [keyPressed]);

        useEffect(() => {
            function downHandler(key) {
                if (keyPressedRef.current === false) {
                    setKeyPressed(true);
                    if (oddDownRef.current === true) {
                        //DOWN PRESSED ON ODD
                        handleStop();
                        setOddDown(false);
                        get_rotation();
                } else {
                        //DOWN PRESSED ON NON ODD
                        handleReset();
                        setOddDown(true)
                    }
                }
            }

            const upHandler = (key) => {
                setKeyPressed(false);
                if (oddUpRef.current === false) {
                    //UP PRESSED ON ODD
                    handleStart();
                    setOddUp(true);
                } else {
                    //UP PRESSED ON NON ODD
                    setOddUp(false);
                }
            };


            window.addEventListener("keydown", downHandler);
            window.addEventListener("keyup", upHandler);

            return () => {
                window.removeEventListener("keydown", downHandler);
                window.removeEventListener("keyup", upHandler);
            };
        }, []);

        return keyPressed;
    }

    const key = useKeyPress();

    useEffect(() => {
        get_rotation();
    }, [])

    const [rotation, setRotation] = useState('');

    function get_rotation() {
        const rotations = ["R", "R'", "L", "L'", "U", "U'", "F", "F'"];
        let rotation_sequence = "";
        for (let i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * rotations.length);
            rotation_sequence = rotation_sequence.concat(rotations[random].toString() + ' ');
        }
        //return rotation_sequence
        setRotation(rotation_sequence);
    }
    

    function convertTime(prop){
       console.log(prop); 
        return(
        <div>                    
            <span className="digits">
              {("0" + Math.floor((prop / 60000) % 60)).slice(-2)}:
             </span>
             <span className="digits">
              {("0" + Math.floor((prop / 1000) % 60)).slice(-2)}:
             </span>
             <span className="digits mili-sec">
              {("0" + ((prop / 10) % 100)).slice(-2)}
             </span>
        </div> )       
    }

    return (
        <div className="flex h-screen">
            <div className="flex items-center flex-col collapse md:visible bg-black w-0 md:w-96">
                <div className="flex justify-center items-center p-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                    <p className="text-2xl font-bold text-white p-2">Speedcube</p>
                </div>
                <div className="">
                    <div className="text-white">{rec.map((item)=> {
                        return <div>{convertTime(item)}</div>
                    })}</div>
                </div>
            </div>
            <div className="flex flex-col bg-zinc-900 w-full h-full">
                <div className="flex items-center justify-center h-full">
                    <div className="w-96 items-center justify-center">
                        <Timer time={time} />
                        <p className="text-2xl text-gray-400 flex justify-center">{rotation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
