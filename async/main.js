"use strict";

const setAlarm = function(time, callback) {
  let timeNow = new Date();
  const doTwoNumber = x => {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  };

  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  const formatHHmm = t => {
    let hh = doTwoNumber(hours);
    let mm = doTwoNumber(minutes);
    return `${hh}:${mm}`;
  };

  if (time === formatHHmm(timeNow)) {
    return callback();
  }
};

const goodMorning = () => alert("Доброе утро!");
const goodNight = () => alert("Спокойной ночи!");
let checkTime = setAlarm;

checkTime("14:15", goodMorning);

function setDailyRhythm(wakeUpTime, bedTime) {
  setInterval(setAlarm(wakeUpTime, goodMorning), 1000);
  setInterval(setAlarm(bedTime, goodNight), 1000);
}

setDailyRhythm("14:28", "14:29");
