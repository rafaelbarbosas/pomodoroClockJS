
const DEFAULT_WORK_TIME = 25;
const DEFAULT_BREAK_TIME = 5;

updateWorkTime = () => {
  const workTime = document.getElementById("work-time").value || DEFAULT_WORK_TIME;
  localStorage.setItem("workTime", workTime);
}

updateBreakTime = () => {
  const breakTime = document.getElementById("break-time").value || DEFAULT_BREAK_TIME;
  localStorage.setItem("breakTime", breakTime);
}

startWork = () => {
    // go to page work.html, passing workTime, breakTime, and hasPauses as parameters
    window.location.href = "pomodoroSession.html";
}
