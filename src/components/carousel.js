import { getProductsByIds } from "../utils/fetch";
import { shapeOne, shapeThree, shapeTwo } from "../utils/shapes";

function getCarouselCardShape(index) {
    const shape = index % 3 === 0 ? shapeOne() : index % 3 === 1 ? shapeTwo() : shapeThree();
    const position = index % 3 === 0 ? 'br' : index % 3 === 1 ? 'tr' : 'bl';
    return `
    <div class="carousel__shape-svg carousel__shape-svg--${position}">
        ${shape}
    </div>
    `;
}

function carouselCard(product, index) {
    const shape = getCarouselCardShape(index);
    return `
    <div class="carousel__slide" data-index="${index}">
            <img src="${product.image.url}" alt="${product.name}">
            <div class="carousel__info">
                <h1>${product.title}</h1>
                <p>${product.description}</p>
                <a href="#" class="btn btn-primary">Shop Now</a>
            </div>
            <div class="carousel__shape">
                ${shape}
            </div>
        </div>
    `;
}

// Tutorial from https://www.youtube.com/watch?v=57pXPbTRhCc
export async function heroCarousel() {
    const products = await getProductsByIds(['f6712e3b-8050-4841-bd64-f332a48f7566','83111322-05a9-4a93-bc81-7d6b58f1a707', 'f99cafd2-bd40-4694-8b33-a6052f36b435']);
  return `
    <div class="hero-carousel">
      <div class="carousel__slides">
        ${products.map(carouselCard).join('')}
      </div>
      <div class="carousel__controls">
        <button class="prev__slide" aria-label="Previous Slide">
          <svg class="prev" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button class="next__slide" aria-label="Next Slide">
          <svg class="next" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  `;
}

export function handleCarousel() {
  // Access carousel slides
  let carouselSlides = document.querySelectorAll('.carousel__slide');
  // Access next and previous buttons
  let next = document.querySelector('.next__slide');
  let prev = document.querySelector('.prev__slide');

  // Find the active slide index
  let counter = 0;

  if (Array.from(carouselSlides).some(slide => slide.classList.contains('active__slide')) === false) {
    carouselSlides[0].classList.add('active__slide');
  } else {
    carouselSlides[counter].classList.add('active__slide');
  }

  // Next button functionality
  next.addEventListener('click', slideNext);
  function slideNext() {
    carouselSlides[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= carouselSlides.length - 1) {
      counter = 0;
    }
    else {
      counter++;
    }
    carouselSlides[counter].style.animation = 'next2 0.5s ease-in forwards';
  }

  // Previous button functionality
  prev.addEventListener('click', slidePrev);
  function slidePrev() {
    carouselSlides[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter <= 0) {
      counter = carouselSlides.length - 1;
    }
    else {
      counter--;
    }
    carouselSlides[counter].style.animation = 'prev2 0.5s ease-in forwards';
  }
}