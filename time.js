const clock = document.querySelector(".status_bar__column--clock");

function showTime() {
  const date = new Date();

  const Hours = String(date.getHours()).padStart(2, "0");
  const Min = String(date.getMinutes()).padStart(2, "0");

  const time = `${Hours}:${Min}`;
  clock.innerText = time;
}
showTime();
setInterval(showTime(), 1000);
