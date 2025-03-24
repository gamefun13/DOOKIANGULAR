document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".error-image");
    let x = 0, y = 0;

    function floatImage() {
        x = Math.sin(Date.now() / 1000) * 10; // Move left & right
        y = Math.cos(Date.now() / 1000) * 10; // Move up & down
        image.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(floatImage);
    }

    floatImage();
});
