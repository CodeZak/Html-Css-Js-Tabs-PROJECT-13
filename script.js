console.log("hey");

const buttons = document.querySelectorAll("button");
const content = document.querySelectorAll(".content");

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        buttons.forEach(function (button) {
            button.classList.remove("active");
        });
        e.currentTarget.classList.add("active");

        content.forEach(function (x) {
            x.classList.remove("show_content");
        });

        content.forEach(function (c) {
            if (e.currentTarget.id === c.id) {
                c.classList.add("show_content");
            }
        });
    });
});