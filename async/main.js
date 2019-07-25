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

  const func = (time, callback) => {
    if (formatHHmm(timeNow) === time) {
      callback();
    }
  };

  return func(time, callback);
};

function setDailyRhythm(wakeUpTime, bedTime) {
  const goodMorning = () => alert("Доброе утро, Вася!");
  const goodNight = () => alert("Спокойной ночи, Вася!");
  setInterval(setAlarm(wakeUpTime, goodMorning), 1000);
  setInterval(setAlarm(bedTime, goodNight), 1000);
}

setDailyRhythm("13:43", "13:44");
