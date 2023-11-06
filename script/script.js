document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const textElement = document.getElementById("text");
        const nameElement = document.getElementById("name");
        const text = "Welcome to my portfolio";
        let currentIndex = 0;

        function typeText() {
            if (currentIndex < text.length) {
                textElement.innerHTML += text.charAt(currentIndex);
                currentIndex++;
                setTimeout(typeText, 100);
            } else {
                const nameText = "By Tim Riekerk";
                currentIndex = 0;

                function typeName() {
                    if (currentIndex < nameText.length) {
                        nameElement.innerHTML += nameText.charAt(currentIndex);
                        currentIndex++;
                        setTimeout(typeName, 100);
                    }
                }

                typeName();
            }
        }

        typeText();
    }, 1000);
});



function startCountdown() {
    let CountdownElement = document.getElementById("countdown")
    let count = 10;
    let text = "Redirecting in "
    function updateCountdown(){
        CountdownElement.innerText = text+count;
        count--;

        if (count < 0) {
          window.location.href = 'home-index.html';
        } else {
            setTimeout(updateCountdown, 1000);
        }
    }

    updateCountdown();
}

window.onload = startCountdown;