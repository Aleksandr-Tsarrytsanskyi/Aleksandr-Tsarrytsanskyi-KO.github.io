document.addEventListener("DOMContentLoaded", init);

function init() {
    let buttonMenu = document.querySelector("#active_button")
    let topmenu = document.querySelector(".menu_mobile")
    let activeMenu = document.querySelector(".topmenu");
    let navLink = document.querySelectorAll(".nav_link");
    let content = document.querySelector("#main")
    getLinkTopMenu(navLink)
    function addElementsTopMenu() {
        buttonMenu.addEventListener("click", function(event) {
            hideButton()
            showtopmenu()
        }) 

    }

    function getLinkTopMenu(navLink) {
        navLink.forEach(element => {
            element.addEventListener("click", function(event) {
                event.preventDefault();
                hideTopMenu()
                showButton();
                const url = event.currentTarget.getAttribute("href");
                loadPage(url)
            })
        });
    }
    function loadPage(url) {
        fetch(url)
        .then(responce => responce.text())
        .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html")
            console.log(doc);
            let main = doc.querySelector("#main").innerHTML
            console.log(main);
            content.innerHTML = main
        })
    }
    function hideButton(elem) {
        buttonMenu.hidden = true
    }

    function showButton() {
        buttonMenu.hidden = false
    }

    function hideTopMenu() {
        topmenu.classList.add("hidemenu")
        topmenu.classList.remove("showmenu")
    }
    function showtopmenu() {
        topmenu.classList.add("showmenu")
        topmenu.classList.remove("hidemenu")
    }
    addElementsTopMenu()
}