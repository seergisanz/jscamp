// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }

// const botones = document.querySelectorAll('.button-apply-job')
// // devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// })

const jobsListingSection = document.querySelector('.jobs-listings');

jobsListingSection.addEventListener('click', function(event) {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})

const techSelect = document.querySelector('#filter-technology');
const jobCards = document.querySelectorAll('.job-listing-card');

techSelect.addEventListener('change', function () {
    const selectedValue = techSelect.value.toLowerCase();
    jobCards.forEach(card => {
        const techs = (card.dataset.tech || '')
            .toLowerCase()
            .split(',');

        console.log({selectedValue, techs})

        if (!selectedValue || techs.includes(selectedValue)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
})
const locationSelect = document.querySelector('#filter-location');

locationSelect.addEventListener('change', function () {
    const selectedTech = techSelect.value.toLowerCase();
    const selectedLocation = locationSelect.value.toLowerCase();

    jobCards.forEach(card => {
        const techs = (card.dataset.tech || '').toLowerCase().split(',');
        const location = (card.dataset.location || '').toLowerCase();

        if (
            (!selectedTech || techs.includes(selectedTech)) &&
            (!selectedLocation || location === selectedLocation)
        ) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
const experienceSelect = document.querySelector('#filter-experience');

experienceSelect.addEventListener('change', function () {
    const selectedTech = techSelect.value.toLowerCase();
    const selectedLocation = locationSelect.value.toLowerCase();
    const selectedExperience = experienceSelect.value.toLowerCase();

    jobCards.forEach(card => {
        const techs = (card.dataset.tech || '').toLowerCase().split(',');
        const location = (card.dataset.location || '').toLowerCase();
        const experience = (card.dataset.experience || '').toLowerCase();

        if (
            (!selectedTech || techs.includes(selectedTech)) &&
            (!selectedLocation || location === selectedLocation) &&
            (!selectedExperience || experience === selectedExperience)
        ) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});