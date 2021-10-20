export const formatTime = (time) => {
  if (!time || isNaN(time) || time <= 0) {
    return null;
  } else {
    let hours = Math.floor(time / 3600);
    time %= 3600;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = String(minutes).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return hours + ':' + minutes + ':' + seconds;
  }
};
