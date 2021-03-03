const x = document.querySelector("#x");

const CLICKED_CLASS = "clicked";

function handleClick() {
    // const hasClass = x.classList.contains(CLICKED_CLASS);
    // if(!hasClass){
    //     x.classList.add(CLICKED_CLASS);
    // } else {
    //     x.classList.remove(CLICKED_CLASS);
    // }
    x.classList.toggle(CLICKED_CLASS);
}

function init() {
    x.addEventListener("click", handleClick);
}

init();