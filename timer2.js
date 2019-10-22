const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  if (key === "b") {
    process.stdout.write('\x07')
  }

  if (key >= 1 && key <= 9) {
    console.log(`setting time for ${key} seconds`)
    setTimeout(() => {
      process.stdout.write('\x07')
    }, key * 1000);
  }
  ;
});



// function alarmTimer(anArrayOfIntervals) {

//   for (let interval of anArrayOfIntervals) {
//     if (Number(interval) >= 0) {
//       setTimeout(() => {
//         process.stdout.write('\x07')
//       }, interval * 1000);
//     }
//   }
// }

// alarmTimer(intervals)