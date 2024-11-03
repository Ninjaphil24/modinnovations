// Contact Start
document.getElementById('contact').addEventListener('click', function () {
    document.querySelector('.formContainer').classList.toggle('inactive');
});

document.getElementById('contactClose').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default button action
    document.querySelector('.formContainer').classList.toggle('inactive');
});

document.getElementById('thankYouClose').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default button action
    document.querySelector('.thankYouContainer').classList.toggle('inactive');
});

document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    // Add your form submission logic here

    // Show thank you message and hide form
    document.querySelector('.formContainer').style.transition = 'opacity 1s';
    document.querySelector('.thankYouContainer').style.transition = 'opacity 1s';
    document.querySelector('.formContainer').classList.add('inactive');
    document.querySelector('.formContainer').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.thankYouContainer').classList.remove('inactive');
        document.querySelector('.thankYouContainer').style.opacity = 1;
    }, 1000);
});
// Contact End