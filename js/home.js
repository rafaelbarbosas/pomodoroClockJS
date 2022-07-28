
const DEFAULT_WORK_TIME = 25;
const DEFAULT_BREAK_TIME = 5;

window.onload = () => {
    // get the parameters from the local storage
    const workTimeLocalStorage = localStorage.getItem("workTime");
    const breakTimeLocalStorage = localStorage.getItem("breakTime");

    if(workTimeLocalStorage){
        document.getElementById("work-time").value = workTimeLocalStorage;
    }

    if(breakTimeLocalStorage){
        document.getElementById("break-time").value = breakTimeLocalStorage;
    }
}

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
