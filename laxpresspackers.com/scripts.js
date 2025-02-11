function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-button").click();
});


function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}
