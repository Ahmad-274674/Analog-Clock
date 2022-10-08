// Analog Clock
const analogHr = document.getElementById('analogHr'),
    analogMt = document.getElementById('analogMt'),
    analogSc = document.getElementById('analogSc');

    

setInterval(() => {
    const date = new Date();
    h = date.getHours() * 30;
    m = date.getMinutes() * 6;
    s = date.getSeconds() * 6;

    analogHr.style.transform = `rotateZ(${(h) + (m/12)}deg)`;
    analogMt.style.transform = `rotateZ(${(m)}deg)`;
    analogSc.style.transform = `rotateZ(${(s)}deg)`;
}, 1000);