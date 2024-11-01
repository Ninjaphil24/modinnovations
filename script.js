import { contentsClass } from "./conents.js";
let contents

let classes = function () {
    console.log('Classes button clicked');
    // Logic for handling classes content
}

const episodesArray = Array.from({ length: 4 }, (_, i) => `Episode ${i + 1}`);
console.log(episodesArray);
const episodesList = document.querySelector('.episodes ul');

for (const [index, episode] of episodesArray.entries()) {
    console.log(index, episode);
    const li = document.createElement('li');
    li.textContent = episode;
    li.dataset.index = index; // Store the index in a data attribute
    episodesList.appendChild(li);
}

// Open and close episode bar
let currentExpandedItem = null;

document.querySelectorAll('.episodes ul li').forEach(item => {
    item.style.transition = 'height 0.3s';
    item.style.height = '50px'; // Set initial height

    item.addEventListener('click', () => {
        // debugger;
        if (currentExpandedItem && currentExpandedItem !== item) {
            currentExpandedItem.style.height = '50px'; // Reset previous expanded item
            currentExpandedItem.querySelector('.content').remove(); // Remove previous content
            currentExpandedItem.querySelector('.episode-title').style.display = 'block'; // Show the title again
        }
        if (item.querySelector('.content')) {
            item.querySelector('.content').remove(); // Remove content
            item.querySelector('.episode-title').style.display = 'block'; // Show the title again
            item.style.height = '50px'; // Reset height
            item.classList.remove('active'); // Remove active class
        } else {
            const contentDiv = document.createElement('div');
            contentDiv.classList.add('content');
            contentDiv.innerHTML = contents[item.dataset.index].replace(/(\d{2}:\d{2} - )?/g, '').replace(/\n/g, '<br>');
            item.querySelector('.episode-title').style.display = 'none'; // Hide the title
            item.appendChild(contentDiv);
            item.style.height = `${contentDiv.scrollHeight + 50}px`; // Set height to content height + initial height
            item.classList.add('active'); // Add active class

            // Wait for the height transition to complete before showing the content
            item.addEventListener('transitionend', function showContent(event) {
                if (event.propertyName === 'height') {
                    contentDiv.style.display = 'block';
                    item.removeEventListener('transitionend', showContent);
                }
            });
            contentDiv.style.display = 'none'; // Initially hide the content
        }
        currentExpandedItem = item.querySelector('.content') ? item : null;
    });

    // Wrap the episode title in a span for easier manipulation
    const titleSpan = document.createElement('span');
    titleSpan.classList.add('episode-title');
    titleSpan.textContent = item.textContent;
    item.textContent = '';
    item.appendChild(titleSpan);

    // Add hover effect using JavaScript
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'var(--color-hover)';
        item.style.transition = '0.4s';
        item.style.color = 'var(--color-white)';
        item.style.cursor = 'pointer';
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = 'var(--color-logodark)';
        item.style.color = 'var(--color-logolight)';
    });
});
