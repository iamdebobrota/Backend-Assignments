import { useState, useEffect } from "react";

const useClock = () => {
  // TODO
  // refer readme.md for what to return


  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [date, setDate] = useState<any>(new Date())



  const tick = () => {
    setDate(new Date());
  }

  useEffect(() => {

    let timerId = setInterval(() => {
      tick()
    }, 1000)

    return function cleanup() {
      clearInterval(timerId)
    }
  })

  useEffect(() => {
    let hour = date.getHours();
    setHours(hour);
  })

  useEffect(() => {
    let minute = date.getMinutes();
    setMinutes(minute);
  })

  useEffect(() => {
    let second = date.getSeconds();
    setSeconds(second);
  })

  return { hours, minutes, seconds };

};

export default useClock;
