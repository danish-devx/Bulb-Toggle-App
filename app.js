let image = document.getElementById("image");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    if (btn.innerText === "ON") { 
        image.src = "2.png"; 
        btn.innerText = "OFF";
    } else {
        image.src = "1.png";
        btn.innerText = "ON";
    }

});
