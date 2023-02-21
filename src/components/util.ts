// const padToTwo = number => (number <= 9 ? `0${number}` : {number});
const padToTwo = (number: Number) => (number <= 9 ? `0${number}` : number);

export const displayTime = (centiseconds: Number) => {
  let min = 0;
  let sec = 0;

  if (centiseconds < 0) {
    centiseconds = 0;
  }
  if (centiseconds < 100) {
    return `00:00:${padToTwo(centiseconds)}`;
  }

  let remainCentiseconds = centiseconds % 100;
  sec = (centiseconds - remainCentiseconds) / 100;
  if (sec < 60) {
    return `00:${padToTwo(sec)}:${padToTwo(remainCentiseconds)}`;
  }

  let remainSec = sec % 60;
  min = (sec - remainSec) / 60;

  return `${padToTwo(min)}:${padToTwo(remainSec)}:${padToTwo(
    remainCentiseconds,
  )}`;
};
