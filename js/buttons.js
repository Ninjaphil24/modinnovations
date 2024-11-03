document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-bg');
    document.querySelector('.presentation').style.display = 'flex';
    document.querySelector('.home').style.display = 'flex';
    document.querySelector('.about').style.display = 'none';
    document.body.style.backgroundImage = "none";
});
// Presentation Start
let home = document.getElementById('home');
let about = document.getElementById('about');

home.addEventListener('click', () => {
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-bg');
    document.querySelector('.episodes').style.display = 'none';
    document.querySelector('.presentation').style.display = 'flex';
    document.querySelector('.home').style.display = 'flex';
    document.querySelector('.about').style.display = 'none';
    document.body.style.backgroundImage = "none";
    setActiveButton(home);
});

about.addEventListener('click', () => {
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-bg');
    document.querySelector('.episodes').style.display = 'none';
    document.querySelector('.presentation').style.display = 'flex';
    document.querySelector('.about').style.display = 'flex';
    document.querySelector('.home').style.display = 'none';
    document.body.style.backgroundImage = "none";
    setActiveButton(about);
});
// Presentation End

// Episodes Start
let contents;
let numberOfLines;
let classes = document.getElementById('classes');
let php = document.getElementById('php');
let js = document.getElementById('js');
let laravel = document.getElementById('laravel');

classes.addEventListener('click', () => {
    contents = contentsClass;
    numberOfLines = 5;
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-classes');
    document.body.style.backgroundImage = "url('img/classes.svg')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "10px 70px";
    document.body.style.backgroundSize = "100px";
    let titleVar = `An introduction to classes in php (with js)`
    updateEpisodesList(numberOfLines, contents, titleVar);
    document.querySelector('.episodes').style.display = 'flex';
    document.querySelector('.presentation').style.display = 'none';
    let storedLocally = localStorage.getItem('activeButton');
    if (storedLocally != 'classes') {
        localStorage.clear()
    }
    localStorage.setItem('activeButton', 'classes');
});

php.addEventListener('click', () => {
    contents = contentsPHP;
    numberOfLines = 33;
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-php');
    document.body.style.backgroundImage = "url('img/php.svg')";
    document.body.style.backgroundSize = "100px";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "10px 70px";
    let titleVar = `Understanding PHP and MVC`
    updateEpisodesList(numberOfLines, contents, titleVar);
    setActiveButton(php);
    document.querySelector('.episodes').style.display = 'flex';
    document.querySelector('.presentation').style.display = 'none';
    document.querySelectorAll('.content a').forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-php2');
    });

    document.querySelectorAll('.content a:hover').forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-php2');
    });
    document.querySelectorAll('.episodes ul li').forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-php2');
    });
    let storedLocally = localStorage.getItem('activeButton');
    if (storedLocally != 'php') {
        localStorage.clear()
    }
    localStorage.setItem('activeButton', 'php');
});

js.addEventListener('click', () => {
    contents = contentsJS;
    numberOfLines = 23; // Set appropriate number of lines for JS
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-js1');
    document.body.style.backgroundImage = "url('img/vue.svg')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "100px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "10px 70px";
    let titleVar = `Front-End Demystified: A Deep Dive into Vue.js`
    updateEpisodesList(numberOfLines, contents, titleVar);
    setActiveButton(js);
    document.querySelector('.episodes').style.display = 'flex';
    document.querySelector('.presentation').style.display = 'none';
    document.querySelectorAll('.content a').forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-js2');
    });

    document.querySelectorAll('.content a:hover').forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-js2');
    });
    document.querySelectorAll('.episodes ul li').forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-js2');
    });
    let storedLocally = localStorage.getItem('activeButton');
    if (storedLocally != 'js') {
        localStorage.clear()
    }
    localStorage.setItem('activeButton', 'js');
});

laravel.addEventListener('click', () => {
    contents = contentsLaravel;
    numberOfLines = 5; // Set appropriate number of lines for Laravel
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-laravel');
    document.body.style.backgroundImage = "url('img/laravel.svg')";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "170px";
    document.body.style.backgroundPosition = "10px 70px";
    let titleVar = `Full stack, with CI/CD and chatGPT`
    updateEpisodesList(numberOfLines, contents, titleVar);
    setActiveButton(laravel);
    document.querySelector('.episodes').style.display = 'flex';
    document.querySelector('.presentation').style.display = 'none';
    document.querySelectorAll('.content a').forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-larared');

    });

    document.querySelectorAll('.content a:hover').forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-larared');
    });
    document.querySelectorAll('.episodes ul li').forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-larared');
    });
    let storedLocally = localStorage.getItem('activeButton');
    if (storedLocally != 'laravel') {
        localStorage.clear()
    }
    localStorage.setItem('activeButton', 'laravel');
});

// Episodes End