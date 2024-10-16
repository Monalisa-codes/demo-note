// Collapsible sections
document.querySelectorAll('h1, h2, h3').forEach(heading => {
    heading.addEventListener('click', () => {
        const section = heading.nextElementSibling;
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
            heading.parentNode.classList.toggle('collapsed');
        }
    });
});

// Automatically generate Table of Contents
const toc = document.querySelector('#toc ul');
document.querySelectorAll('section').forEach(section => {
    const heading = section.querySelector('h1, h2, h3');
    if (heading) {
        const level = heading.tagName.toLowerCase() === 'h1' ? 0 : heading.tagName.toLowerCase() === 'h2' ? 1 : 2;
        const listItem = document.createElement('li');
        listItem.style.marginLeft = level * 20 + 'px';
        
        const anchor = document.createElement('a');
        anchor.href = `#${section.id}`;
        anchor.textContent = heading.textContent;

        listItem.appendChild(anchor);
        toc.appendChild(listItem);
    }
});