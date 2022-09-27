import JustValidate from 'just-validate';
import Inputmask from "inputmask";

const inputs = document.querySelectorAll('[data-input]');
const tel = document.getElementById('input-phone');
const telLabel = document.querySelector('.tel-label');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.close-btn');
const contactForm = document.querySelector('.contact-form');


const shrinkLabel = (input) => {
  const label = input.nextElementSibling;
  if (input.value.trim())  {
    label.classList.add('shrink')
  } else {
    label.classList.remove('shrink')
  }
}

// const resetForm = inputs => {
//   inputs.forEach(input => {
//     input.value = ''
//     shrinkLabel(input);
//   })
// };

const showModal = () => {
  modal.style.display = 'grid';
  // resetForm(inputs);
};

const closeBtn = () => {
  modal.style.display = 'none';
};

inputs.forEach(input => input.addEventListener('blur', () => shrinkLabel(input)));

const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(tel);

tel.addEventListener('mouseenter', () => {
  telLabel.classList.add('shrink')
})

tel.addEventListener('mouseleave', () => {
  telLabel.classList.remove('shrink')
})

// const handleSubmit = e => {
//   showModal();
//   const formData = new FormData(e.target);
//   console.log(...formData)
//
//   const fetchData = async () => {
//     try {
//       const response = await fetch('app/mail.php', {
//         method: 'POST',
//         body: formData
//       })
//       const result = await response.json();
//       console.log(result.message)
//     } catch (err) {
//       console.log(err)
//     }
//
//   }
//   fetchData();
// };

const validation = new JustValidate(contactForm);

validation
  .addField('#input-name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя должно быть больше двух букв'
    },
    {
      rule: 'required',
      errorMessage: 'Обязательное поле!',
    }
  ])
  .addField('#input-email', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле!',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный email!',
    },

  ])
  .addField('#input-phone', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле!',
    }
  ])
  .onSuccess((e) => {

    const formData = new FormData(e.target);

    console.log(...formData)

    const fetchData = async () => {
      try {
        const response = await fetch('app/mail.php', {
          method: 'POST',
          body: formData
        })
        const result = await response.json();
        console.log(result.message)
      } catch (err) {
        console.log(err)
      }

    }
    fetchData();
    e.target.reset();
    showModal();
  });

modalCloseBtn.addEventListener('click', closeBtn);
modal.addEventListener('click', closeBtn);
