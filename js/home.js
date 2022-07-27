
var workTime = 25;
var breakTime = 5;
var hasPauses = false;

updateWorkTime = () => {
  workTime = document.getElementById("work-time").value;
}

updateBreakTime = () => {
  breakTime = document.getElementById("break-time").value;
}

updateHasPauses = () => {
  hasPauses = document.getElementById("has-pauses").checked;
}

startWork = () => {
    // go to page work.html, passing workTime, breakTime, and hasPauses as parameters
    window.location.href = "work-break.html?workTime=" + workTime +
        "&breakTime=" + breakTime +
        "&hasPauses=" + hasPauses;
}
