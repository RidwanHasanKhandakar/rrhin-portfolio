function showTab(tabId){

    const tabs =
    document.querySelectorAll(".tab-content");

    const buttons =
    document.querySelectorAll(".tab-btn");

    tabs.forEach(tab=>{
        tab.classList.remove("active-tab");
    });

    buttons.forEach(btn=>{
        btn.classList.remove("active");
    });

    document
    .getElementById(tabId)
    .classList.add("active-tab");

    event.target.classList.add("active");
}