function generateTime() {
  const now = new Date();

  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;

  let timeString = `${hours}:${minutes}:${seconds}`;
  const clockElement = document.getElementById("clock");
  clockElement.textContent = timeString;
}

setInterval(generateTime, 1000);
