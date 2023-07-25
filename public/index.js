//calls our reveal function whenever the user scrolls
window.addEventListener("scroll", reveal);

//loads the function for the first time on page load
reveal();

function reveal() {
    //selects every element i want to have revealed
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++){
        //if the top of the element is within 150 px of the top of the window
        if (reveals[i].getBoundingClientRect().top < window.innerHeight - 150){
            //make the element "active", causing the reveal css to kick in
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}