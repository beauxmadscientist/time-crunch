const el = document.querySelector("p");
let t = 30000;
el.innerHTML = t;
var x = setInterval(() => {
    t--;
    if (t === 0) {
        clearInterval(x);
        el.innerHTML = "Game Over";
    } else {
        el.innerHTML = t;
    }
}, 1);
console.log(t+500);
