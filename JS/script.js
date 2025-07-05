const aside = document.querySelector('aside');
const blank = document.querySelector('.blank');
const form = document.querySelector('header form');
const main = document.querySelector('main .container');
const handBurger = document.querySelector(".hand-burger");
const asideSpace = document.querySelector('.aside-space');
const addSearchIcon = document.querySelector('.search div:last-child');

async function fetchData() {

    const res = await fetch('file.json');
    const data = await res.json();

    data.forEach(element => {
        main.innerHTML += `
            <article>
                    <div class="thumbnail">
                        <img src="${element.thumbnailUrl}" alt="${element.thumbnailUrl}">
                        <span class="time">${element.duration}</span>
                    </div>
                    <div class="description">
                        <section>
                            <span>
                                <img src="${element.thumbnailUrl}" alt="${element.thumbnailUrl}">
                            </span>
                            <div class="content">
                                <h3>${element.title}</h3>
                                <small>${element.description}</small>
                                <small>${element.views} views ${element.timestamp}</small>
                            </div>
                        </section>
                        <img class="dot-menu" src="images/dot-menu.png" alt="dot-menu-icon">
                    </div>
            </article>
        `;
    });
}
fetchData();


handBurger.addEventListener('click', () => {
    aside.classList.toggle('active-aside');
    asideSpace.classList.toggle('active-aside');
    blank.classList.toggle('active-blank');
});


blank.addEventListener('click', () => {
    aside.classList.remove('active-aside');
    asideSpace.classList.remove('active-aside');
    blank.classList.remove('active-blank');
})


const arrow = document.createElement('img');
arrow.src = "images/arrow.svg";
arrow.alt = "arrowIcon";
arrow.classList.add('arrow');
form.prepend(arrow);


const searchIcon = document.createElement('img');
searchIcon.src = "images/search.svg";
searchIcon.alt = "searchIcon";
searchIcon.classList.add('search-icon');
addSearchIcon.prepend(searchIcon);

addSearchIcon.addEventListener('click', () => {
    form.classList.add('active-form');
    form.style.display = "flex";
});

arrow.addEventListener('click', () => {
    form.style.display = "none";
    form.classList.remove('active-form');
});
