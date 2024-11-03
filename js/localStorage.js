// localStorage start

let checkbox = document.getElementById('btn');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        localStorage.setItem('checkBool', 'true');
        if (categoryMemory === 'classes') {
            localStorage.setItem('activeButton', 'classes');
        } else if (categoryMemory === 'php') {
            localStorage.setItem('activeButton', 'php');
        } else if (categoryMemory === 'js') {
            localStorage.setItem('activeButton', 'js');
        } else if (categoryMemory === 'laravel') {
            localStorage.setItem('activeButton', 'laravel');
        } else {
            categoryMemory = '';
        }
    } else {
        localStorage.clear();
    }
})
document.addEventListener('DOMContentLoaded', () => {
    const classBtn = document.getElementById('classes');
    const phpBtn = document.getElementById('php');
    const jsBtn = document.getElementById('js');
    const laravelBtn = document.getElementById('laravel');

    if (localStorage.length > 0) {
        checkbox.checked = true;
        let storedBtn = localStorage.getItem('activeButton');
        let storedEp = localStorage.getItem('activeEpisode');
        console.log("localStorage has items");
        storedBtn == 'classes' ? classBtn.click() : storedBtn == 'php' ? phpBtn.click() : storedBtn == 'js' ? jsBtn.click() : storedBtn == 'laravel' ? laravelBtn.click() : null

        if (storedEp) {
            const episodeElement = document.querySelector(`.episodes ul li:nth-child(${storedEp})`);
            episodeElement.click();
            episodeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
})
// locoalStorage end