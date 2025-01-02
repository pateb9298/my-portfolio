
function showExperience(experienceId) {
    const allExperience = document.querySelectorAll('.experience-content');
    allExperience.forEach((item) => {
        item.style.display = 'none';
    });

    const selectedExperience = document.getElementById(experienceId);
    selectedExperience.style.display = 'block';
}

