let i = sessionStorage.getItem("count");

if (i) {
  i = parseInt(i);
} else {
  i = 0;
}

const timerCount = function () {
  i = i + 1;
  document.getElementById("timer").innerText = i + " secondi";
  sessionStorage.setItem("count", i);
};

setInterval(timerCount, 1000);
