// localStorage start
const classBtn = document.getElementById('classes');
const phpBtn = document.getElementById('php');
const jsBtn = document.getElementById('js');
const laravelBtn = document.getElementById('laravel');
let checkbox = document.getElementById('btn');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        localStorage.setItem('checkBool', 'true');
        localStorage.setItem('activeButton', categoryMemory);
        console.log(categoryMemory)
        categoryMemory == 'classes' ? classBtn.click() : categoryMemory == 'php' ? phpBtn.click() : categoryMemory == 'js' ? jsBtn.click() : categoryMemory == 'laravel' ? laravelBtn.click() : null
    } else {
        localStorage.clear();
    }
})
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.length > 0) {
        checkbox.checked = true;
        let storedBtn = localStorage.getItem('activeButton');
        let storedEp = localStorage.getItem('activeEpisode');
        // console.log("localStorage has items");
        storedBtn == 'classes' ? classBtn.click() : storedBtn == 'php' ? phpBtn.click() : storedBtn == 'js' ? jsBtn.click() : storedBtn == 'laravel' ? laravelBtn.click() : null
        console.log(categoryMemory)
        if (storedEp) {
            const episodeElement = document.querySelector(`.episodes ul li:nth-child(${storedEp})`);
            episodeElement.click();
            episodeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
})
// localStorage end