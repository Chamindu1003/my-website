function showSection(sectionId) {

    
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.classList.remove('visible');
        section.classList.add('hidden');
    });

    
    const activeSection = document.getElementById(sectionId);

    if (!activeSection) return;


    setTimeout(() => {
        activeSection.classList.remove('hidden');
        activeSection.classList.add('visible');
    }, 120);
}
