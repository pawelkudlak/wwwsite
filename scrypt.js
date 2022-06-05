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

showGameDetails = () => {
    let tytul = document.getElementById('title').textContent;
    let sles = document.getElementById('sles').textContent;
    let premiere = document.getElementById('premiere').textContent;
    let developer = document.getElementById('developer').textContent;
    let publisher = document.getElementById('publisher').textContent;
    let text = document.getElementById('text').textContent;
    let yt = document.getElementById('youtubevid').textContent;

    let tytul1 = document.getElementsByClassName('').textContent;

    wichGame = () => {
        
    }

    console.log(tytul, sles, premiere, developer, publisher, text, yt);
    console.log(tytul1);
}

showGameDetails();