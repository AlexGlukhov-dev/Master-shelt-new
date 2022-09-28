const currentYear = document.querySelector('.footer__year');
const year = new Date().getFullYear();
currentYear.innerText = `Master-shelt, ${year || 2022}. Все права защищены`
