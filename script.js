let count = 0;
let intervalId = setInterval(() => {
  console.log("Repeating message", count);
  count++;

  if (count === 5) {
    clearInterval(intervalId); // stop after 5 times
    console.log("Stopped interval");
  }
}, 1000);
