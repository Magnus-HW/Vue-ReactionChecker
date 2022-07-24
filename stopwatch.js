class Stopwatch {
  constructor() {
    this.randTime = 0;
    this.timerId = 0;
    this.endTime = 0;
    this.startTime = 0;
  }
  setRandTime() {
    this.randTime = Math.random() * 5000;
  }
  start() {
    this.startTime = new Date.now();
  }
  stop() {
    this.endTime = new Date.now();
    return 1;
  }
  result() {
    
  }
}

let stopwatch = new Stopwatch();

// function stopwatch () {
// const randTime = Math.random() * 5000
//   const stopwatch = setTimeout(() => {
//     isWaiting.value = true;
//   }, randTime);
//   return stopwatch;
// }
//set random TimeOut
