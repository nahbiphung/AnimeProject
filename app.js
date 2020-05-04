const moonPath = "M16.4618 27.5595C16.4618 42.7473 28.2943 55.0595 28.2943 55.0595C13.1065 55.0595 0.794312 42.7473 0.794312 27.5595C0.794312 12.3717 13.1065 0.0595093 28.2943 0.0595093C28.2943 0.0595093 16.4618 12.3717 16.4618 27.5595Z"

const sunPath = "M55.7943 27.5595C55.7943 42.7473 43.4821 55.0595 28.2943 55.0595C13.1065 55.0595 0.794312 42.7473 0.794312 27.5595C0.794312 12.3717 13.1065 0.0595093 28.2943 0.0595093C43.4821 0.0595093 55.7943 12.3717 55.7943 27.5595Z"

const darkMode = document.querySelector("#darkMode");

let toggle = false;

darkMode.addEventListener("click", () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    timeline
        .add({
            targets: '#sun',
            d: [{ value: toggle ? sunPath : moonPath}]
        })
        .add({
            targets: '#darkMode',
            rotate: toggle ? 0 : 320
        }, '-= 350')
        .add({
            targets: 'section',
            background: toggle ? 'rgb(225,225,225)' : 'rgb(22,22,22)'
        }, '-= 750')
        .add({
            targets: 'h1',
            color: toggle ? 'rgb(22,22,22)' : 'rgb(225,225,225)'
        }, '-= 700');

    if(!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }
});


