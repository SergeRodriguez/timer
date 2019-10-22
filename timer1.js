const intervals = process.argv.slice(2)

function alarmTimer(anArrayOfIntervals) {
  if (anArrayOfIntervals.length === 0) {
    return
  }

  for (let interval of anArrayOfIntervals) {
    if (interval >= 0 && !isNaN(Number(interval))) {
      setTimeout(() => {
        process.stdout.write('\x07')
      }, interval * 1000);
    }
  }
}

alarmTimer(intervals)