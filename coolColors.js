let body = document.body;

function rgb(num) {
    return Math.floor(Math.random() * num);
}

const colorChange = () => {
    let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
    body.style.backgroundColor = randomColor;

}
body.onkeypress = colorChange;






