
(function () {
    "use strict";

    console.log("Every Picture Experiment");

    const container = document.querySelector("#photo-container");
    const images = document.querySelectorAll("#photo-container img");
    const number = document.querySelector("#photo-number");
    const caption = document.querySelector("#caption");

    const captions = [
        "A different perspective changes what we see.",
        "The same bridge can look different from another angle.",
        "Looking up reveals details we might normally miss."
    ];

    let currentImage = 0;

    function changeImage(imageNumber) {

        if (currentImage !== imageNumber) {

            for (let i = 0; i < images.length; i++) {
                images[i].classList.remove("active");
            }

            images[imageNumber].classList.add("active");

            currentImage = imageNumber;

            number.innerHTML = "0" + (imageNumber + 1) + " / 03";
            caption.innerHTML = captions[imageNumber];
        }
    }

    container.addEventListener("mousemove", function (event) {

        const mouseX = event.offsetX;
        const width = container.offsetWidth;

        if (mouseX < width / 3) {
            changeImage(0);
        } else if (mouseX < width / 3 * 2) {
            changeImage(1);
        } else {
            changeImage(2);
        }

    });

    container.addEventListener("mouseleave", function () {
        changeImage(0);
    });

})();
