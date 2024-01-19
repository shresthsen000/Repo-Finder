document.getElementById('search').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchUser();
    }
});
function searchUser() {
    const searchInput = document.getElementById('search').value;
    if (searchInput.trim() !== '') {
        const githubUsername = searchInput.trim();

        const profileUrl = `https://api.github.com/users/${githubUsername}`;
        const repositoriesUrl = `https://api.github.com/users/${githubUsername}/repos`;
        clearData();

        $.get(profileUrl, function (data) {
            if (data.message && data.message.toLowerCase() === 'not found') {
                displayNoUserFound();
            } else {
                displayProfile(data);
            }
        });
        $.get(repositoriesUrl, function (data) {
            displayRepositories(data);
        });
    }
}
function displayProfile(profile) {
    const profileImage = document.getElementById('profileImage');
    const profileName = document.getElementById('profileName');

    profileImage.src = profile.avatar_url;
    profileName.textContent = profile.name;

    $('#profile').removeClass('hidden');
}

function displayRepositories(repositories) {
    const repositoriesContainer = document.getElementById('repositories');

    repositories.forEach(repo => {
        const repoBox = document.createElement('div');
        repoBox.classList.add('repo-box');

        const techStack = repo.language ? `<span>${repo.language}</span>` : '';

        repoBox.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available.'}</p>
            <div class="tech-stack">${techStack}</div>
        `;

        repoBox.addEventListener('click', function () {
            window.open(repo.html_url, '_blank');
        });

        repositoriesContainer.appendChild(repoBox);
    });
}


function clearData() {
    const profileImage = document.getElementById('profileImage');
    const profileName = document.getElementById('profileName');
    const repositoriesContainer = document.getElementById('repositories');

    profileImage.src = '';
    profileName.textContent = '';
    repositoriesContainer.innerHTML = '';
    $('#profile').addClass('hidden');
}

function displayNoUserFound() {
    clearData();
    
    const repositoriesContainer = document.getElementById('repositories');
    const noUserFoundMessage = document.createElement('p');
    noUserFoundMessage.textContent = 'No user found.';
    repositoriesContainer.appendChild(noUserFoundMessage);
}
