function updateEpisodesList(numberOfLines, contents, titleVar) {
    const episodesArray = Array.from({ length: numberOfLines }, (_, i) => i == 0 ? titleVar : `Episode ${i}`);
    const episodesList = document.querySelector('.episodes ul');
    episodesList.innerHTML = ''; // Clear existing list

    for (const [index, episode] of episodesArray.entries()) {
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

        item.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from propagating to document
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
                console.log(contents[item.dataset.index]);
                item.querySelector('.episode-title').style.display = 'none'; // Hide the title
                item.appendChild(contentDiv);
                const dataIndex = event.target.getAttribute('data-index')
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
            item.style.transition = 'all 0.4s';
            item.style.transform = 'scale(1.2)';
            item.style.cursor = 'pointer';
            item.style.zIndex = '10'; // Ensure it stays above other elements
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.zIndex = '1'; // Reset z-index
        });
    });

    // Close the expanded episode box when clicking outside
    document.addEventListener('click', (event) => {
        if (currentExpandedItem && !currentExpandedItem.contains(event.target)) {
            currentExpandedItem.style.height = '50px'; // Reset height
            currentExpandedItem.querySelector('.content').remove(); // Remove content
            currentExpandedItem.querySelector('.episode-title').style.display = 'block'; // Show the title again
            currentExpandedItem.classList.remove('active'); // Remove active class
            currentExpandedItem = null;
        }
    });
}

function setActiveButton(button) {
    document.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}
