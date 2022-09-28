const currentYears = document.querySelectorAll('.footer__year');
const year = new Date().getFullYear();

currentYears.forEach(currentYear => currentYear.innerText = `Master-shelt, ${year || 2022}. Все права защищены`)

