const PAUSE_HTML_ICON = '<i class="fa fa-pause"></i>';
const STAR_HTML_ICON = '<i class="fa fa-play"></i>';

const pageState = {
    currentState: "work",
    hasPauses: null,
    isPaused: false,
    work: {
        time: null,
        title: "Work time ⏰",
        buttonText: "Start Break",
        backgroundColor: "#7b1562",
        color: "#f5f5f5",
        timer: {
            backgroundColor: "#46183b"
        },
        button: {
            backgroundColor: "#f5f5f5",
            color: "#46183b",
            backgroundColorOnHover: "#46183b",
            colorOnHover: "#f5f5f5",
        },
        container: {
            backgroundColor: "rgba(96, 17, 76, 1)"
        }
    },
    break: {
        time: null,
        title: "Break Time ☕",
        buttonText: "Start work",
        backgroundColor: "#627b15",
        color: "#f5f5f5",
        timer: {
            backgroundColor: "#3b4618"
        },
        button: {
            backgroundColor: "#f5f5f5",
            color: "#3b4618",
            backgroundColorOnHover: "#3b4618",
            colorOnHover: "#f5f5f5",
        },
        container: {
            backgroundColor: "#3b4618cf"
        }
    }
};

window.onload = () => {
    // get the parameters from the URL
    var urlParams = new URLSearchParams(window.location.search);
    pageState.work.time = Number.parseInt(urlParams.get("workTime"));
    pageState.break.time = Number.parseInt(urlParams.get("breakTime"));
    pageState.hasPauses = urlParams.get("hasPauses") == 'true';

    updatePage();
}

const startPauseTimer = () => {
    pageState.isPaused = !pageState.isPaused; // Toggle the pause state
    // change the button icon
    document.getElementById("action-button").innerHTML = (pageState.isPaused) ?
        STAR_HTML_ICON : PAUSE_HTML_ICON;

    // TODO - Pause/start the timer
}

const navigateToHome = () => {
    window.location.href = "home.html";
}

const changeState = () => {
    // chage page state based on the current state
    if (pageState.currentState == "work") {
        pageState.currentState = "break";
    } else {
        pageState.currentState = "work";
    }
    // update the page
    updatePage();
}

const updatePage = () => {
    // update the page based on the page state
    var state = pageState[pageState.currentState];
    document.getElementById("title-text").innerHTML = state.title;
    document.getElementById("button-text").innerHTML = state.buttonText;
    document.getElementsByClassName("timer-container")[0].style.backgroundColor = state.timer.backgroundColor;
    Array.prototype.slice.call( document.getElementsByClassName("action-button") ).map(
        (button) => {
            button.style.backgroundColor = state.button.backgroundColor;
            button.style.color = state.button.color;
            button.onmouseover = () => {
                button.style.backgroundColor = state.button.backgroundColorOnHover;
                button.style.color = state.button.colorOnHover;
            }
            button.onmouseout = () => {
                button.style.backgroundColor = state.button.backgroundColor;
                button.style.color = state.button.color;
            }
        }
    );
    document.body.style.backgroundColor = state.backgroundColor;
    document.body.style.color = state.color;
    document.getElementsByClassName("container")[0].style.backgroundColor = state.container.backgroundColor;
}
