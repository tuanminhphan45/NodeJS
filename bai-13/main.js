localStorage.setItem("fullName", "Phan Minh");
const fullname = localStorage.getItem("fullName");
const h1 = document.querySelector(".test");
h1.innerHTML = fullname;
const handleClick = document.querySelector(".button")
handleClick.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark")
    const currentMode = localStorage.getItem()
})
localStorage.key();

