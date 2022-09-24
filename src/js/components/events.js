/****************** filters ********************************/
const filter = document.querySelector('.events__filter');
const slider = document.querySelector('.events__slider');
const sliderInner = document.querySelector('.events__slider-inner');

const filterWrapper = document.createElement('ul');

const filterTitles = [
  {id: 1, title: '#бизнес завтраки', category: 'launches'},
  {id: 2, title: '#гранты', category: 'grants'},
  {id: 3, title: '#курсы', category: 'courses'},
  {id: 4, title: '#все', category: 'all'},

]
const slides = [
  {
    id: 1,
    title: '17 июня прошёл один из офлайн-митапов ',
    hashtag: '#бизнес&nbsp;завтраки',
    descr: "Мы продолжили обсуждать рекомендательны системы. В этот раз сделали фокус на объяснимости. Модели машинного обучения — это чёрные ящики, и далеко не всегда...",
    category: 'launches',
    image: '../img/events/event-image.jpg'

  },
  {
    id: 2,
    title: '18 июня прошёл один из офлайн-митапов ',
    hashtag: '#гранты',
    descr: "Мы продолжили обсуждать рекомендательны системы. В этот раз сделали фокус на объяснимости. Модели машинного обучения — это чёрные ящики, и далеко не всегда...",
    category: 'grants',
    image: '../img/events/event-image.jpg'
  },
  {
    id: 3,
    title: '20 августа прошёл один из офлайн-митапов ',
    hashtag: '#бизнес завтраки',
    descr: "Мы продолжили обсуждать рекомендательны системы. В этот раз сделали фокус на объяснимости. Модели машинного обучения — это чёрные ящики, и далеко не всегда...",
    category: 'launches',
    image: '../img/events/event-image.jpg'
  },
  {
    id: 4,
    title: '19 июня прошёл один из офлайн-митапов ',
    hashtag: '#гранты',
    descr: "Мы продолжили обсуждать рекомендательны системы. В этот раз сделали фокус на объяснимости. Модели машинного обучения — это чёрные ящики, и далеко не всегда...",
    category: 'grants',
    image: '../img/events/event-image.jpg'
  },
  {
    id: 5,
    title: '10 июня прошёл один из офлайн-митапов ',
    hashtag: '#курсы',
    descr: "Мы продолжили обсуждать рекомендательны системы. В этот раз сделали фокус на объяснимости. Модели машинного обучения — это чёрные ящики, и далеко не всегда...",
    category: 'courses',
    image: '../img/events/event-image.jpg'
  },
  {
    id: 6,
    title: '21 сентября прошёл один из офлайн-митапов ',
    hashtag: '#бизнес завтраки',
    descr: "Мы продолжили обсуждать рекомендательны системы. В этот раз сделали фокус на объяснимости. Модели машинного обучения — это чёрные ящики, и далеко не всегда...",
    category: 'launches',
    image: '../img/events/event-image.jpg'
  },
  {
    id: 7,
    title: '05 декабря прошёл один из офлайн-митапов ',
    hashtag: '#гранты',
    descr: "Мы продолжили обсуждать рекомендательны системы. В этот раз сделали фокус на объяснимости. Модели машинного обучения — это чёрные ящики, и далеко не всегда...",
    category: 'grants',
    image: '../img/events/event-image.jpg'
  },
  {
    id: 8,
    title: '12 марта прошёл один из офлайн-митапов ',
    hashtag: '#курсы',
    descr: "Мы продолжили обсуждать рекомендательны системы. В этот раз сделали фокус на объяснимости. Модели машинного обучения — это чёрные ящики, и далеко не всегда...",
    category: 'courses',
    image: '../img/events/event-image.jpg'
  },
]
const result = [];

filterWrapper.classList.add('filter__items');
filter.append(filterWrapper);

const filteredSlides = (slides, filter = 'all') => {

  return slides.filter(slide => {
    if (filter === 'all') {

      return slide
    } else {
      return slide.category === filter
    }
  })
}

const renderSlides = (slides) => {

  return slides.map(slide => {

    return `
        <article class="events__slide event">
            <div class="event__image">
              <img src="${slide.image}" alt="${slide.title}">
            </div>
            <h4 class="event__title">${slide.title}</h4>
            <span class="event__hashtag">${slide.hashtag}</span>
            <p class="event__descr">${slide.descr}</p>
            <div class="event__actions">
              <button class="btn-reset event__showmore--btn">Развернуть</button>
              <button class="btn-reset event__registration--btn">Регистрация</button>
            </div>
        </article>
    `
  })

}

const handleFilter = (filter) => {
  result.map(el => el.classList.contains('active') && el.classList.remove('active'));

  sliderInner.innerHTML = ' ';

 const content = renderSlides(filteredSlides(slides, filter)).join('')
  sliderInner.insertAdjacentHTML('afterbegin', content)
}

const getFilters = () => {

  filterTitles.map(filterTitle => {
    let li = document.createElement('li');
    li.classList.add('filter__item');
    li.append(filterTitle.title);
    if (filterTitle.category === 'all') {
      li.classList.add('active')
    }
    li.addEventListener('click', () => {
        handleFilter(filterTitle.category);
        li.classList.add('active')
      }
    )

    result.push(li);

  })

  return result;
}

filterWrapper.append(...getFilters());

sliderInner.insertAdjacentHTML('afterbegin', renderSlides(slides, 'all').join(''));

/*************** slider **************************/

const eventsSlider = document.querySelector('.events__slider-inner');
const progressBar = document.querySelector('.progress-bar__inner');

let sliderGrabbed = false;

eventsSlider.parentElement.addEventListener('scroll', (e) => {
  progressBar.style.width = `${getScrollPercentage()}%`
})

eventsSlider.addEventListener('mousedown', (e) => {
  sliderGrabbed = true;
  eventsSlider.style.cursor = 'grabbing';
})

eventsSlider.addEventListener('mouseup', (e) => {
  sliderGrabbed = false;
  eventsSlider.style.cursor = 'grab';
})

eventsSlider.addEventListener('mouseleave', (e) => {
  sliderGrabbed = false;
})

eventsSlider.addEventListener('mousemove', (e) => {
  if (sliderGrabbed) {
    eventsSlider.parentElement.scrollLeft -= e.movementX;
  }
})

eventsSlider.addEventListener('wheel', (e) => {
  e.preventDefault()
  eventsSlider.parentElement.scrollLeft += e.deltaY;
})

function getScrollPercentage() {
  return ((eventsSlider.parentElement.scrollLeft / (eventsSlider.parentElement.scrollWidth - eventsSlider.parentElement.clientWidth)) * 100);
}
