document.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const colors = ['#D4A373', '#E9C46A', '#F4A261', '#E76F51', '#C5A16F'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = randomColor;

    particle.style.left = `${e.pageX}px`;
    particle.style.top = `${e.pageY}px`;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1000);
});
