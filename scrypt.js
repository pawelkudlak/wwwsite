function dropDownMenu() {
    document.getElementById("dropddiv").classList.toggle("show");
}

window.onclick = function (klik) {
    if (!klik.target.matches('.dropdm')) {
        let dropdowns = document.getElementsByClassName("dropdowndiv-content");

        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}