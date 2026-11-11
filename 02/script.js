const screen = document.querySelector(".screen");
// const pixel = document.querySelector(".pixel");

// for (let i = 1; i <= 9999; i++) {
//     const pixelCopy = pixel.cloneNode()
//     screen.appendChild(pixelCopy)
// }


const createPixel = ()=>{
    const divPixel = document.createElement("div");
    divPixel.className = "pixel";
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    
    divPixel.style.backgroundColor = `black`;

    divPixel.addEventListener('mouseover',()=>{
        divPixel.style.backgroundColor = `rgb(${red},${green},${blue})`
        divPixel.style.opacity = 1;
        const interval = setInterval(()=>{
            divPixel.style.opacity -= 0.1;
            if (divPixel.style.opacity == 0){
                clearInterval(interval);
                divPixel.style.opacity = 1;
                divPixel.style.backgroundColor = `black`;
            }
            
        },100);
    });
    return divPixel;
}


for (let i = 1; i <= 10000; i++) {
    screen.appendChild(createPixel());
}