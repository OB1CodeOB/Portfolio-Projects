// Get elements from DOM
const lightsaberHilt = document.getElementById('lightsaber-hilt');
const lightsaberBlade = document.getElementById('lightsaber-blade');

// Event listeners
lightsaberHilt.addEventListener('click', () => {
    lightsaberBlade.classList.toggle('blade-extend');
})