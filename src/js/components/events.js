/****************** filters ********************************/
const filter = document.querySelector('.events__filter');
const slider = document.querySelector('.events__slider');
const sliderInner = document.querySelector('.events__slider-inner');

const filterWrapper = document.createElement('ul');

const filterTitles = [
  {id: 1, title: '#бизнес завтраки', category: 'launches'},
  {id: 2, title: '#гранты', category: 'grants'},
  {id: 3, title: '#курсы', category: 'courses'},
  {id: 4, title: '#анонс', category: 'announce'},
  {id: 5, title: '#все', category: 'all'},

]
const slides = [
  {
    id: 'event-1',
    date: new Date(2022, 11,15),
    title: 'IT - Day',
    hashtag: '#анонс',
    descr: "⁃ Аналитика рынка вакансий IT -специалистов, основные тренды сегодня и прогнозы на будущее<br>" +
      " ⁃ Актуальные инструменты поиска и привлечения IT - специалистов<br>" +
      " ⁃ Современные подходы к мотивации и инструменты удержания IT - специалистов<br>" +
      " ⁃ Обучение и развитие IT - команд. Meta skills vs Soft skills:в чем основные различия.",
    category: 'announce',
    image: '../img/events/event-img-1.jpg'

  },
  {
    id: 'event-2',
    // date:'09.07.2020',
    date:new Date(2022, 6,9),
    title: 'Международный форум Kazan Digital Week – 2022',
    hashtag: '#гранты',
    descr: "Проводится Кабинетом Министров Республики Татарстан под эгидой Правительства Российской Федерации. Мероприятие, ориентированное на разработчиков и пользователей цифровых интеллектуальных технологий, созданных на их основе систем, сервисов и услуг, пройдет в смешанном (оффлайн + онлайн) формате в Международном выставочном центре «Казань Экспо» с 21 по 24 сентября 2022 года.",
    category: 'grants',
    image: '../img/events/event-img-2.jpg'
  },
  {
    id: 'event-3',
    // date:'15.08.2021',
    date:new Date(2021, 7,15),
    title: '2 июля прошел офлайн-митап от Яндекс.Дзена.',
    hashtag: '#бизнес завтраки',
    descr: "Мы продолжили обсуждать рекомендательные системы. В этот раз сделали фокус на объяснимости. Известно, что модели машинного обучения — это чёрные ящики, и далеко не всегда понятно, как они принимают решения и почему выдают именно такие прогнозы. Среди прочего, мы поговорили о том, как выстраивать рекомендательные системы, чтобы их работа была чуть понятнее, какими методами исследовать их устройство. Вас также ждёт нетворкинг, подарки и мастер-класс по приготовлению бургеров.",
    category: 'launches',
    image: '../img/events/event-img-3.jpg'
  },
  {
    id: 'event-4',
    // date:'25.09.2021',
    date:new Date(2020, 8,25),
    title: 'Global Information Security Days',
    hashtag: '#гранты',
    descr: "Это форум по информационной безопасности с участием звезд из сфер IT и ИБ. Ключевые эксперты рынка, представители регуляторов и научного сообщества, директора по продажам, специалисты-практики поделятся опытом и знаниями с каждым участником мероприятия. Также запланированы интерактивные мероприятия, батлы, профессиональная премия, и многое другое.",
    category: 'grants',
    image: '../img/events/event-img-4.jpg'
  },
  {
    id: 'event-5',
    // date:'01.03.2022',
    date:new Date(2022, 2,1),
    title: 'VII Международный IT-Форум 2022 Цифровая Трансформация',
    hashtag: '#курсы',
    descr: "Мы примем участие на VII Международном IT-Форуме 2022 Цифровая Трансформация. Отечественные IT-решения. Международный IT-форум – это крупная экспертная площадка для обсуждения передовых мировых и российских разработок высокотехнологичного характера: от технологий до их практической реализации. Работа мероприятия будет поделена на 16 тематических сессий, так что любой гость найдет для себя интересные темы: от IT технологий в госполитике до Big Data и искусственного интеллекта.",
    category: 'courses',
    image: '../img/events/event-img-5.jpg'
  },
  {
    id: 'event-6',
    // date:'11.10.2022',
    date:new Date(2022, 9,11),
    title: '25 мая прошел очередной бизнес-завтрак.',
    hashtag: '#бизнес завтраки',
    descr: "Поговорили об онлайн-кассах, интернет-рекламе и бизнес-процессах в ритейле.<br>" +
      "Обсудили:<br>" +
      " • что произойдёт в ближайшем будущем и как это пойдёт на пользу бизнесу;<br>" +
      " • как развивать бизнес с помощью партнёрских программ;<br>" +
      " • как сформировать общее пространство для командной работы;<br>" +
      " • какие онлайн-каналы использовать для продвижения сайта, привлечения аудитории и раскрутки бренда;<br>" +
      " • как перейти на обязательную маркировку.",
    category: 'launches',
    image: '../img/events/event-img-6.jpg'
  },
  // {
  //   id: 'event-7',
  //   title: '05 декабря прошёл один из офлайн-митапов ',
  //   hashtag: '#гранты',
  //   descr: "Мы продолжили обсуждать рекомендательны системы. В этот раз сделали фокус на объяснимости. Модели машинного обучения — это чёрные ящики, и далеко не всегда...",
  //   category: 'grants',
  //   image: '../img/events/event-image.jpg'
  // },
  // {
  //   id: 8,
  //   title: '12 марта прошёл один из офлайн-митапов ',
  //   hashtag: '#курсы',
  //   descr: "Мы продолжили обсуждать рекомендательны системы. В этот раз сделали фокус на объяснимости. Модели машинного обучения — это чёрные ящики, и далеко не всегда...",
  //   category: 'courses',
  //   image: '../img/events/event-image.jpg'
  // },
]
const sortedSlides = slides.sort((a, b) => b.date - a.date)

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
              <button class="btn-reset event__showmore--btn" data-path=${slide.id}>Развернуть</button>
              <div class="event__date">${slide.date.toLocaleDateString()}</div>
<!--              <a class="btn-reset event__registration&#45;&#45;btn" href="#contact" data-scroll>Регистрация</a>-->
            </div>
        </article>
    `
  })

}

const handleModal = () => {
  const btns = document.querySelectorAll('.event__showmore--btn');
  const modalOverlay = document.querySelector('.modal-overlay ');
  const modal = document.querySelector('.modal');

  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      const path = e.currentTarget.getAttribute('data-path');
      const [currentContent] = slides.filter(slide => slide.id === path);

      modal.classList.add('modal--visible');
      modal.insertAdjacentHTML('beforeend', `
            <button class="modal__close">&times;</button>
                <div class="modal__image">
                    <img src=${currentContent.image} alt="${currentContent.id} image"/>
                </div>
                <h1 class="modal__title">${currentContent.title}</h1>
                <p class="modal__descr">${currentContent.descr}</p>
            `)

      modalOverlay.classList.add('modal-overlay--visible');
      document.body.style.paddingRight = paddingOffset;
      document.body.style.overflow = 'hidden';
    });
  });

  modalOverlay.addEventListener('click', (e) => {
    const closeBtn = document.querySelector('.modal__close');
    if (e.target === modalOverlay || e.target === closeBtn) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modal.classList.remove('modal--visible');
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = 0 + 'px';
      modal.innerHTML = ''
    }
  });
}

const handleFilter = (slides, filter) => {
  result.map(el => el.classList.contains('active') && el.classList.remove('active'));

  sliderInner.innerHTML = ' ';

 const content = renderSlides(filteredSlides(slides, filter)).join('')

  sliderInner.insertAdjacentHTML('afterbegin', content)
  handleModal();
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
        handleFilter(sortedSlides, filterTitle.category);
        li.classList.add('active')
      }
    )

    result.push(li);

  })

  return result;
}

filterWrapper.append(...getFilters());

sliderInner.insertAdjacentHTML('afterbegin', renderSlides(sortedSlides, 'all').join(''));

/*************** slider **************************/

const eventsSlider = document.querySelector('.events__slider-inner');
const progressBar = document.querySelector('.progress-bar__inner');

let sliderGrabbed = false;

eventsSlider.parentElement.addEventListener('scroll', () => {
  progressBar.style.width = `${getScrollPercentage()}%`
})

eventsSlider.addEventListener('mousedown', () => {
  sliderGrabbed = true;
  eventsSlider.style.cursor = 'grabbing';
})

eventsSlider.addEventListener('mouseup', () => {
  sliderGrabbed = false;
  eventsSlider.style.cursor = 'grab';
})

eventsSlider.addEventListener('mouseleave', () => {
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

/******************* modals **********************/

document.addEventListener('DOMContentLoaded', handleModal());
