var workTime = null;
var breakTime = null;
var hasPauses = null;

window.onload = () => {
    // get the parameters from the URL
    var urlParams = new URLSearchParams(window.location.search);
    workTime = Number.parseInt(urlParams.get("workTime"));
    breakTime = Number.parseInt(urlParams.get("breakTime"));
    hasPauses = urlParams.get("hasPauses") == 'true';
}

const navigateToHome = () => {
    window.location.href = "home.html";
}
