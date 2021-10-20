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

    /*
    let sec_num = parseInt(time, 10)
    let hours   = Math.floor(sec_num / 3600)
    let minutes = Math.floor(sec_num / 60) % 60
    let seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(value => value < 10 ? '0' + value : value)
        .join(':')
    */
  }
};
