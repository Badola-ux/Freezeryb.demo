var tabLink = document.getElementsByClassName("tabLink");
var tabContents = document.getElementsByClassName("tabContents");

function openTab(openTab){
    for(tabLinks of tabLink){
        tabLink.classList.remove("active-link");
    }
    for(tabContents of tabContent){
    tabContents.classList.remove("active-link");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementsById("tabName").classList.add("active-tab");
}