window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    document.getElementById('loading').style.display = 'none';
});

function toggleCustomProjectTextarea() {
    const reasonSelect = document.getElementById('Reason');
    const customProjectContainer = document.getElementById('customProjectContainer');
    if (reasonSelect.value === 'Other') {
        customProjectContainer.style.display = 'block';
    } else {
        customProjectContainer.style.display = 'none';
    }
}

function selectProject(projectName) {
    const formattedProjectName = projectName.toLowerCase().replace(/ /g, '-');
    window.location.href = `form.html?project=${encodeURIComponent(projectName)}`;
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function populateForm() {
    const projectName = getQueryParam('project');
    if (projectName) {
        document.getElementById('project-name').value = projectName;
        document.getElementById('project-title').textContent = projectName;
    }
}
